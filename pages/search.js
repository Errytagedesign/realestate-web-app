import React, { useState } from "react";
import { useRouter } from "next/router";

import { Wrapper, Content } from "../styles/searchpage.style";
import SearchFilter from "../components/searchFilter/SearchFilter";
import { BsFilterCircle } from "react-icons/bs";

function Search() {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <Wrapper>
      <Content onClick={() => setSearchFilters((prev) => !prev)}>
        <section>
          <BsFilterCircle className="filterIcon" />{" "}
          <h2> Search Property by Filter</h2>
        </section>
      </Content>

      {searchFilters && <SearchFilter />}
      <h3>Properties {router.query.purpose}</h3>
    </Wrapper>
  );
}

export default Search;
