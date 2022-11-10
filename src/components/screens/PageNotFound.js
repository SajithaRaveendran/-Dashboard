import React from "react";
import "../screens/PageNote.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PageNotFound() {
  return (
    <>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="contant_box_404">
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>
                  <Home to="/-Dashboard">Go to home</Home>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const Home = styled(Link)`
  color: #fff !important;
  display: flex;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  text-decoration: none;
  display: inline-block;
`;
