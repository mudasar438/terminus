import { tablebg } from "@/public/assets/images";

/* eslint-disable react/prop-types */
const TecnomicTable = () => {
  const TableArray = [
    {
      Stage: "Stage 1",
      TokenPrice: "$0.0003",
      Percentage: "20%",
      Amountoftoken: "272,000,000",
      Duration: "One week",
      StartDate: "11-07-2024",
    },
    {
      Stage: " Stage 2",
      TokenPrice: "$$0.0005",
      Percentage: "20%",
      Amountoftoken: "272,000,000",
      Duration: "one week",
      StartDate: "11-28-2024",
    },
    {
      Stage: "Stage 3",
      TokenPrice: "$$0.0006",
      Percentage: "20%",
      Amountoftoken: "272,000,000",
      Duration: "One week",
      StartDate: "11-05-2024",
    },
    {
      Stage: "Stage 4",
      TokenPrice: "$0.$0.0007",
      Percentage: "20%",
      Amountoftoken: "272,000,000",
      Duration: "One Week",
      StartDate: "11-12-2024",
    },
    {
      Stage: "Stage 5",
      TokenPrice: "$0.0008",
      Percentage: "20%",
      Amountoftoken: "272,000,000",
      Duration: "One week",
      StartDate: "11-19-2024",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${tablebg.src})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

        boxSizing: "border-box",

        // overflow: "hidden",
        // maxWidth: "1442px",
      }}
      className="overflow-x-auto overflow-y-auto w-full flex flex-col items-center justify-center box-border max-w-[1400px] mx-auto rounded-3xl p-2  h-[500px] lg-[700px] bg-100% lg:bg-100%"
    >
      <div className="container mx-auto max-w-[1100px] ">
        <div className="table-container">
          <table className="min-w-[900px] border-collapse border-spacing-0 w-full ">
            <thead>
              <tr className="font-sandro">
                <th className="text-center text-white border-b-[1px] border-r-[1px] border-[#717171] py-2 px-4">
                  Category
                </th>
                <th className="text-center text-[15px]  text-white border-b-[1px]  border-r-[1px] border-[#717171] py-2 px-4">
                  Percentage
                </th>
                <th className="text-center text-[15px]  text-white border-b-[1px]  border-r-[1px] border-[#717171] py-2 px-4">
                  Percentage
                </th>
                <th className="text-center text-[15px]  text-white border-b-[1px]  border-r-[1px] border-[#717171] py-2 px-4">
                  Percentage
                </th>
                <th className="text-center text-[15px]  text-white border-b-[1px]  border-r-[1px] border-[#717171] py-2 px-4">
                  Percentage
                </th>
                <th className="text-center text-[15px]  text-white border-b-[1px]   border-[#717171] py-2 px-4">
                  Allocation
                </th>
              </tr>
            </thead>
            <tbody>
              {TableArray.map((row, index) => (
                <tr
                  key={index}
                  className="border-none text-white last:border-none"
                >
                  <td className="text-center border-r-[1px] border-[#717171] text-[17px]  py-3 lg:py-5 px-4">
                    {row?.Stage}
                  </td>
                  <td className="text-center border-r-[1px] border-[#717171] text-[17px]  py-2 px-4">
                    {row?.TokenPrice}
                  </td>
                  <td className="text-center border-r-[1px] border-[#717171] text-[17px]  py-2 px-4">
                    {row?.Percentage}
                  </td>
                  <td className="text-center border-r-[1px] border-[#717171] text-[17px]  py-2 px-4">
                    {row?.Amountoftoken}
                  </td>
                  <td className="text-center border-r-[1px] border-[#717171] text-[17px]  py-2 px-4">
                    {row?.Duration}
                  </td>
                  <td
                    className={`text-center ${
                      index === TableArray.length - 1 ? "" : ""
                    } text-[17px] font-light py-2 px-4`}
                  >
                    {row?.StartDate}
                  </td>
                </tr>
              ))}
              <tr className="border-t-[1px]  border-[#737272] text-white font-sandro">
                <td className="text-center border-r-[1px] border-[#737272] text-[15px] py-2 px-4">
                  Official Price
                </td>
                <td className="text-center border-r-[1px] border-[#737272]  text-[15px] py-2 px-4">
                  $0.001
                </td>
                <td className="text-center border-r-[1px] border-[#737272] text-[15px] py-2 px-4">
                  100%
                </td>
                <td className="text-center border-r-[1px] border-[#737272] text-[15px] py-2 px-4">
                  1,360,000,000{" "}
                </td>
                <td className="text-center border-r-[1px] border-[#737272]  text-[15px] py-2 px-4">
                  Five Week{" "}
                </td>
                <td className="text-center  text-[15px] py-2 px-4">
                  Trading Date: <br /> 01-26-2024{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TecnomicTable;
