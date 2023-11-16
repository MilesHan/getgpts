"use client";

import { useEffect, useState } from "react";

import Brand from "./components/Brand";
import { Gpts } from "./types/gpts";
import GptsList from "./components/GptsList";
import Search from "./components/Search";

export default () => {
  const [gpts, setGpts] = useState<Gpts[]>([]);
  const [gptsCount, setGptsCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchGpts = async () => {
    const params = {
      last_id: 0,
      limit: 30,
    };

    setLoading(true);
    const resp = await fetch("/api/gptsall", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    setLoading(false);

    if (resp.ok) {
      const res = await resp.json();
      if (res.data) {
        setGptsCount(res.data.count);
        setGpts(res.data.rows);
      }
    }
  };

  useEffect(() => {
    fetchGpts();
  }, []);

  return (
    <>
      <Brand count={gptsCount} />
      {/* <ProductHunt /> */}
      <Search setGpts={setGpts} setLoading={setLoading} />
      {/* <CardList gpts={gpts} loading={loading} /> */}
      <GptsList gpts={gpts} loading={loading} />
    </>
  );
};
