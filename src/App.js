import { useRef } from "react";
import "./App.css";
import Logo from "./logo.svg";
import data from "./data/invoice.json";
import ReactToPrint from "react-to-print";

function App() {
  const refInvoice = useRef(null);
  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-body">
          <div className="invoice-box" ref={refInvoice}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr className="top">
                  <td colSpan="4">
                    <table>
                      <tbody>
                        <tr className="information">
                          <td colSpan="4">
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <strong>Cédula:</strong> 1234567890
                                    <br />
                                    <strong>Nombres:</strong> Brangy Gabriel
                                    Castro Vara
                                    <br />
                                    <strong>Email:</strong>{" "}
                                    brangy.castro1@gmail.com
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td className="title">
                            <img
                              src={Logo}
                              style={{ width: "100%", maxWidth: "300px" }}
                              alt=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr className="heading">
                  <td>Cantidad</td>
                  <td
                    style={{
                      textAlign: "start",
                    }}
                  >
                    Descripción
                  </td>
                  <td>V. Unitario (USD)</td>
                  <td>V. Total (COP)</td>
                </tr>

                {data.map((item) => (
                  <tr
                    className="item"
                    style={{ fontSize: "12px" }}
                    key={item.id}
                  >
                    <td
                      style={{
                        textAlign: "center",
                        width: "90px",
                      }}
                    >
                      {item.amount}
                    </td>
                    <td
                      style={{
                        textAlign: "start",
                      }}
                    >
                      {item.description}
                    </td>
                    <td style={{ textAlign: "right", width: "150px" }}>
                      $ {item.unitary}
                    </td>
                    <td style={{ textAlign: "right", width: "90px" }}>
                      $ {item.total}
                    </td>
                  </tr>
                ))}
                <tr className="total" style={{ fontSize: "12px" }}>
                  <td></td>
                  <td></td>
                  <td
                    style={{
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    Sub Total:
                  </td>
                  <td style={{ textAlign: "right", width: "90px" }}> $ 1000</td>
                </tr>
                <tr className="total" style={{ fontSize: "12px" }}>
                  <td></td>
                  <td></td>
                  <td style={{ textAlign: "start", fontWeight: "bold" }}>
                    Anticipo:
                  </td>
                  <td style={{ textAlign: "right", width: "90px" }}>$ 1000</td>
                </tr>
                <tr className="total" style={{ fontSize: "12px" }}>
                  <td></td>
                  <td></td>
                  <td style={{ textAlign: "start", fontWeight: "bold" }}>
                    Saldo:
                  </td>
                  <td style={{ textAlign: "right", width: "90px" }}>$ 1000</td>
                </tr>
                <tr className="total" style={{ fontSize: "12px" }}>
                  <td></td>
                  <td></td>
                  <td
                    style={{
                      textAlign: "start",
                      width: "120px",
                      fontWeight: "bold",
                    }}
                  >
                    Total:
                  </td>
                  <td style={{ textAlign: "right", width: "90px" }}> $ 1000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ReactToPrint
            trigger={() => (
              <button type="button" class="btn btn-outline-success">
                Imprimir o Descargar
              </button>
            )}
            content={() => refInvoice.current}
            bodyClass="m-5"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
