import React, { Component } from 'react';
import { embedDashboard } from 'amazon-quicksight-embedding-sdk';
// The entire module:
import * as QuickSight from 'aws-sdk/clients/quicksight';
import { Auth } from "aws-amplify";

export default class AwsQuickSightComp1 extends Component {

    async componentDidMount() {
        console.log('currentCredentials1: ' + JSON.stringify(await Auth.currentCredentials()));
        console.log("currentCredentials2: ", (await Auth.currentCredentials()));

        const quicksight = new QuickSight({
            region: "us-east-1",
            // credentials: () => Auth.currentCredentials(),
            credentials: Auth.currentCredentials(),
        });
        //Huvin vuoksi:
        var aws = require('aws-sdk');
          console.log("aws.config: ", aws.config);
          console.log("aws.config.region: ", aws.config.region);  // prints null
          console.log("aws.config.credentials: ", aws.config.credentials); // prints null
          console.log("process.env: ", process.env);
        
        console.log("quicksight: ", quicksight);
        console.log("quicksight.config: ", quicksight.config);
        console.log("quicksight.config.region: ", quicksight.config.region); // prints ok
        console.log("quicksight.config.credentials: ", quicksight.config.credentials); // prints Promise <pending>
        
        // const url = quicksight.getDashboardEmbedUrl({ AwsAccountId: "174926533776", IdentityType: "IAM", DashboardId: "f0cc0c85-0cbe-4904-9abf-961850735e56" }).promise()
        // .then((result) => {
        //     console.log("Result: " + result);
        // }).catch(error => {
        //     console.error(error);
        // });

        //const url = ``
        const url = `https://us-east-1.quicksight.aws.amazon.com/embed/ddb26be346aa40a2983ad9a2d379258c/dashboards/15f0d094-d6a9-4079-b00d-58aed8f5bc38?isauthcode=true&identityprovider=quicksight&code=AYABeLMtKet4Y_viv7nsOYsnR4QAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4P-lAb3AsrVHPwO-wVCEmuFDTp0yz4wFfkrwutzPupewBA5ZLFONBkIGkF3GigdHDYAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDJCqhQie0GgMO3GjRgIBEIA7QETwKm0je7X_TpA9JbZz6xU5FbWO7Pm9W012qbXAkuKnvV5kZX7wONjNPts6TGQqgsxAIoCi9XbEPosCAAAAAAwAABAAAAAAAAAAAAAAAAAAu23O7BVhMAOOAmxRnPMgvP____8AAAABAAAAAAAAAAAAAAABAAAAm-0FywBRXa1Qd3esHmjy6_5Zz9OoiKn-6_RVKfEzEqly8CmdIXO0uh8IS3-yCo5KSmZbGMUlQlw0esl5cge7Tz7OwrLZx4Dm9fv0uoOEaFvgVlx-0DJ0LTRVuAfGblaNod8dd5atwvZnGVJ71ZKss_bvm3nqV5p5Lu1GMH2lJcCeAGeYPkIpbG4yxSlwQMc2p54w4ssTrG3ZhoBXBkDXV9d3yUfY2BNHBF46Iw%3D%3D`


        console.log("url: ", url); // prints Promise <pending>
        const options = {
            url,
            container: document.getElementById("dashboardContainer"),
            parameters: {
                // country: "United States",
                // states: [
                //     "California",
                //     "Washington"
                // ]
            },
            scrolling: "no",
            height: "700px",
            width: "1000px",
            locale: "en-US"
        };
        embedDashboard(options);
        console.log("options: ", options);// prints Promise "resolved" undefined
        console.log("options url: ", options.url); // prints Promise <pending> "resolved" undefined
        //embedDashboard(url)
    }

    render() {
        //console.log(options)
        return (
            <div>
                <div>
                    <h4>Greetings from AwsQuickSightComp1</h4>
                </div>
                <div id="dashboardContainer"></div>
                <div></div>
            </div>

        )
    }


}
