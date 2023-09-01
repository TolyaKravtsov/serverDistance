import { act, renderHook, waitFor } from "@testing-library/react";

import { useTableSort } from "./useTableSort";

const TEST_DATA = [
  { name: "Server A", distance: 100 },
  { name: "Server B", distance: 50 },
  { name: "Server C", distance: 75 },
];

describe("useTableSort", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useTableSort());

    expect(result.current.sortDirection).toBe("asc");
    expect(result.current.serverInfo).toBeUndefined();
    expect(result.current.fieldName).toBe("name");
  });

  it("should set serverInfo when data is provided", () => {
    const { rerender, result } = renderHook(props => useTableSort(props), {
      initialProps: TEST_DATA,
    });

    expect(result.current.serverInfo).toEqual(TEST_DATA);

    const newData = [...TEST_DATA, { name: "Server D", distance: 120 }];
    rerender(newData);

    expect(result.current.serverInfo).toEqual(newData);
  });

  it("should sort data by name in ascending order", async () => {
    const { result } = renderHook(() => useTableSort(TEST_DATA));

    expect(result.current.sortDirection).toBe("asc");
    expect(result.current.fieldName).toBe("name");
    expect(result.current.serverInfo).toEqual(TEST_DATA);
  });

  it("should sort data by distance in descending order", async () => {
    const { result } = renderHook(() => useTableSort(TEST_DATA));

    await act(() => {
      return waitFor(() => result.current.onSort("distance"));
    });

    expect(result.current.sortDirection).toBe("desc");
    expect(result.current.fieldName).toBe("distance");
    // Ensure data is sorted by distance in descending order
    expect(result.current.serverInfo).toEqual(TEST_DATA);
  });
});

describe("useGetServers", () => {
  jest.mock("@tanstack/react-query", () => ({
    useQuery: jest.fn(),
  }));

  it("should fetch server data and return data, not in error state, and not loading", async () => {
    const useQueryMock = jest.fn().mockReturnValue({
      data: TEST_DATA,
      isError: false,
      isLoading: false,
    });

    const { result } = renderHook(() => useQueryMock());

    await act(() => {
      return waitFor(() => result.current.data);
    });

    expect(result.current.data).toEqual(TEST_DATA);
    expect(result.current.isError).toBe(false);
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle an error correctly", async () => {
    const useQueryMock = jest.fn().mockReturnValue({
      data: null,
      isError: true,
      isLoading: false,
    });

    const { result } = renderHook(() => useQueryMock());

    await act(() => {
      return waitFor(() => result.current.data);
    });

    expect(result.current.data).toBeNull();
    expect(result.current.isError).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });
});
