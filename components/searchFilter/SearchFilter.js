import React, { useState } from "react";
import { Wrapper, Content } from "../searchFilter/SearchFilter.styles";
import { filterData, getFilterValues } from "../../utils/filterData";

import { useRouter } from "next/router";

function SearchFilter() {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  return (
    <Wrapper>
      <Content>
        {filters.map((filter) => (
          <section key={filter.queryName}>
            <select
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              <option value={filter.placeholder} selected>
                {" "}
                {filter.placeholder}{" "}
              </option>
              {filter?.items?.map((item) => (
                <>
                  <option value={item.value} key={item.value}>
                    {" "}
                    {filter.placeholder && item.name}{" "}
                  </option>
                </>
              ))}
            </select>
          </section>
        ))}
      </Content>
    </Wrapper>
  );
}

export default SearchFilter;
