import { Gpts } from "@/app/types/gpts";
import fs from "fs";
import { QueryResultRow, sql } from "@vercel/postgres";

export const getGptsFromFile = async (): Promise<Gpts[]> => {
  try {
    const dataFile = process.env.GPTS_DATA_FILE;
    if (!dataFile) {
      return [];
    }
    
    const data = fs.readFileSync(dataFile, "utf8");

    const jsonData = JSON.parse(data);

    let gpts: Gpts[] = [];
    jsonData.data.rows.map((v: any) => {
      gpts.push({
        // uuid: v["data"]["gizmo"]["id"],
        // org_id: v["data"]["gizmo"]["organization_id"],
        // name: v["data"]["gizmo"]["display"]["name"],
        // description: v["data"]["gizmo"]["display"]["description"],
        // avatar_url: v["data"]["gizmo"]["display"]["profile_picture_url"],
        // short_url: v["data"]["gizmo"]["short_url"],
        // author_id: v["data"]["gizmo"]["author"]["user_id"],
        // author_name: v["data"]["gizmo"]["author"]["display_name"],
        // created_at: v["created_at"],
        // updated_at: v["data"]["gizmo"]["updated_at"],
        detail: JSON.stringify(v),
        uuid: v["uuid"],
        org_id: v["org_id"],
        name: v["name"],
        description: v["description"],
        avatar_url: v["avatar_url"],
        short_url: v["short_url"],
        author_id: v["author_id"],
        author_name: v["author_name"],
        created_at: v["created_at"],
        updated_at: v["updated_at"],
      });
    });

    return gpts;
  } catch (err) {
    console.error("Error loading JSON file:", err);
    return [];
  }
};

export const searchGpts = async (question: string): Promise<Gpts[]> => {
  // const uri = `${process.env.INDEX_API_BASE_URI}/gpts/search`;
  // const data = {
  //   question: question,
  // };

  try {
    const sqlstr = `
  SELECT * 
  FROM gpts
  WHERE Name ILIKE '%' || $1 || '%' OR Description ILIKE '%' || $2 || '%'
  ORDER BY RANDOM() 
  LIMIT 1000
`;
    const values = [question, question];
    const res = await sql.query(sqlstr, values);
    
    console.log("res: ", res);
    if (res.rowCount === 0) {
      return [];
    }

    const gpts: Gpts[] = [];
    const { rows } = res;

    rows.forEach((row) => {
      const gpt = formatGpts(row);
      gpts.push(gpt);
    });

    return gpts;
    
  } catch (e) {
    console.log("request gpts search failed: ", e);
  }

  return [];
};

function formatGpts(row: QueryResultRow): Gpts {
  const gpts: Gpts = {
    uuid: row.uuid,
    org_id: row.org_id,
    name: row.name,
    description: row.description,
    avatar_url: row.avatar_url,
    short_url: row.short_url,
    author_id: row.author_id,
    author_name: row.author_name,
    created_at: row.created_at,
    updated_at: row.updated_at,
    visit_url: "https://chat.openai.com/g/" + row.short_url,
    // detail: row.detail,
  };

  return gpts;
}

// export const searchGpts = async (question: string): Promise<Gpts[]> => {
//   const uri = `${process.env.INDEX_API_BASE_URI}/gpts/search`;
//   const data = {
//     question: question,
//   };

//   try {
//     const resp = await fetch(uri, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.INDEX_API_KEY}`,
//       },
//       body: JSON.stringify(data),
//     });
//     const res = await resp.json();
//     if (res.data) {
//       return res.data;
//     }
//   } catch (e) {
//     console.log("request gpts search failed: ", e);
//   }

//   return [];
// };
