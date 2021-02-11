import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <title>App NextJs SSR</title>
      </Head>

      <body>
        <div className="container-fluid bg-light">
          <div className="text-center">
            <img className="mt-5" src="./images/logo1.png" /> < br />
            <h1 className="display-4">Confira as nossas jóias incríveis</h1>
          </div>
          <div className="row row-cols-4 row-cols-md-4 g-4 mt-5 mx-5 justify-content-center">
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/alianca1.png" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Aliança em Ouro Cravejada</h5>
                  <p className="card-text"><s>R$ 2.500,00 </s></p>
                  <p className="card-text"> <b>R$ 1.900,00</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/alianca2.png" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Aliança em Ouro Rose</h5>
                  <p className="card-text"><s>R$ 2.499,90 </s></p>
                  <p className="card-text"> <b>R$ 1.899,90</b> </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/alianca3.png" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Aliança em Ouro Tradicional</h5>
                  <p className="card-text"><s>R$ 1.500 </s></p>
                  <p className="card-text"> <b>R$ 1.290,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/anel1.PNG" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Anel em Prata Cravejado</h5>
                  <p className="card-text"><s> R$ 1.200,00</s></p>
                  <p className="card-text"> <b>R$ 1.000,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/anel2.jpg" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Anel em Prata Realeza</h5>
                  <p className="card-text"><s>R$ 1.500,90 </s></p>
                  <p className="card-text"> <b>R$ 1.399,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/anel3.png" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Anel em Prata Esmeralda</h5>
                  <p className="card-text"><s>R$ 1.200,00 </s></p>
                  <p className="card-text"> <b>R$ 999,99</b> </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/colar1.PNG" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Colar em Ouro Lua e Estrelas</h5>
                  <p className="card-text"><s>R$ 1.050,00 </s></p>
                  <p className="card-text"> <b>R$ 899,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/colar2.png" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Colar em Prata Girassol</h5>
                  <p className="card-text"><s>R$ 1.000,00 </s></p>
                  <p className="card-text"> <b>R$ 799,99</b> </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/colar3.png" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Colar em Ouro Coração</h5>
                  <p className="card-text"><s>R$ 1.700 </s></p>
                  <p className="card-text"> <b>R$ 1.499,90</b> </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/brinco1.jpg" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Brinco em Ouro e Prata Rosas</h5>
                  <p className="card-text"><s>R$ 560,00 </s></p>
                  <p className="card-text"> <b>R$ 399,99</b> </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/brinco2.PNG" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Brinco em Ouro branco</h5>
                  <p className="card-text"><s> R$ 1.200</s></p>
                  <p className="card-text"> <b> R$ 900,90</b> </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/brinco3.jpeg" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Brinco em Prata Cascata</h5>
                  <p className="card-text"><s> R$ 900,00</s></p>
                  <p className="card-text"> <b>R$ 700,99</b> </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/pulseira1.PNG" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Pulseira em Ouro</h5>
                  <p className="card-text"><s> R$ 850,99</s></p>
                  <p className="card-text"> <b>R$ 650,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2">
              <div className="card">
                <img src="./images/pulseira2.PNG" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Pulseira em Ouro Branco</h5>
                  <p className="card-text"><s>R$ 1.799,00 </s></p>
                  <p className="card-text"> <b>R$ 1.590,99</b>  </p>
                </div>
              </div>
            </div>
            <div className="col mt-5 mr-2 mb-5">
              <div className="card">
                <img src="./images/pulseira3.PNG" className="card-img-top" alt="jóia" />
                <div className="card-body">
                  <h5 className="card-title">Pulseira em Ouro Folhas</h5>
                  <p className="card-text"><s> R$ 1.200</s></p>
                  <p className="card-text"> <b>R$ 900,99</b> </p>
                </div>

              </div>
            </div>
          </div>
        </div>


      </body>
    </div>
  )
}
