import React from "react";

const Grid = ({ config, data }) => {
  console.log(config);
  return (
    <table>
      <thead>
        <tr>
          {config.map((item) => (
            <th>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              {config.map((configItem) => {
                return (
                  <td>
                    {configItem.field !== "Trailer" ? (
                      item[configItem.field]
                    ) : (
                      <configItem.component data={item[configItem.field]} />
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Grid;
