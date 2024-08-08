"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="flex gap-1">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Ketik Film yang ingin ditonton"
      />
      <Button
        onClick={() => router.push(`/videos?title=${search}`)}
        type="submit">
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
