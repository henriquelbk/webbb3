"use client"

import Head from "next/head";
import Footer from "../components/Footer";
import { useState } from "react";
import { doLogin } from "@/services/Web3Services";
import { useRouter } from "next/navigation";

export default function Home() {

  const { push } = useRouter(); 

  const [message, setMessage] = useState(""); 

  function btnLoginClick(){
    doLogin()
      .then(account => push("/vote"))
      .catch(err => {
        console.error(err);
        setMessage(err.message);
      });      
  }

  return (
    <>
      <Head>
        <title>Webbb3 | Login</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img className="d-block mx-lg-auto img-fluid" width="700" height="500" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Webbb3</h1>
            <p className="lead">On-chain voting.</p>
            <p className="lead mb-3">Sign up with your wallet and vote!</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-st">
              <button type="button" onClick={btnLoginClick} className="btn btn-primary btn-lg px-4 me-md-2">
                <img src="./metamask.png" width="64" className="me-3" />
                Connect with Metamask
              </button>
              <p className="message">{message}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}