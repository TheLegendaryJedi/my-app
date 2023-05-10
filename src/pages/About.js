import React from "react";
import { AboutContainer } from "./About.style";

export const About = () => {
  return (
    <AboutContainer>
      <h1>About</h1>
      <hr />
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        nunc ut neque vestibulum pellentesque. Vivamus vel mauris a nibh
        pulvinar laoreet. Curabitur dignissim mattis mi vel dictum. In at auctor
        urna, gravida blandit nisi. Aenean accumsan, augue id venenatis mollis,
        eros arcu tempus dolor, eget tempus sem velit et quam. Nam consectetur
        consectetur quam sed rhoncus. Aenean velit justo, varius ut arcu at,
        tincidunt lobortis lorem. Sed sollicitudin aliquet turpis at vestibulum.
        Ut in congue sapien. Sed vitae lectus id dolor pellentesque aliquet. Sed
        lectus massa, luctus ac ultricies id, dictum sed felis. Nam dignissim,
        diam a pharetra dapibus, risus dolor finibus augue, ut tincidunt turpis
        tellus eget est.
      </p>
    </AboutContainer>
  );
};
