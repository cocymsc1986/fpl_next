import React from "react";
// import { renderWithApollo } from "../../utils/testing/mockApollo";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

import { Fixtures } from "./Fixtures";

describe("Fixtures component", () => {
  it("should render loading while fetching", () => {
    const { getByTestId } = render(
      <MockedProvider mocks={[]} useTypeName={false}>
        <Fixtures id={1} mocks={[]} />
      </MockedProvider>
    );
    expect(getByTestId("loader")).toBeInTheDocument();
  });
});
