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

        //const url = `https://us-east-1.quicksight.aws.amazon.com/embed/f8ec24bc1c7642ef88603c0d7a60e2fe/dashboards/15f0d094-d6a9-4079-b00d-58aed8f5bc38?isauthcode=true&identityprovider=quicksight&code=AYABeBy2k3-NVSbei3G0tsi9X1AAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6MjU5NDgwNDYyMTMyOmtleS81NGYwMjdiYy03MDJhLTQxY2YtYmViNS0xNDViOTExNzFkYzMAuAECAQB4P-lAb3AsrVHPwO-wVCEmuFDTp0yz4wFfkrwutzPupewBbQXtq55srEUnC7r5VjZeLAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDJeJI24dSyTi-wt6jAIBEIA7bSbcAflWZYN5dJb9HI8DiAUr-b6ZrfjKvxYeSH_3bMP6uHaSU-TrpxZ_k8h7rWsRk42ZGd-cMfXP038CAAAAAAwAABAAAAAAAAAAAAAAAAAAXzGud0Mg76jkqE1weBQjVv____8AAAABAAAAAAAAAAAAAAABAAAAmyy7SWRO_4PsE1aLw31Yl4ul3pE0uRBaWVrGjcDkDef0gALPBOqP6GkFhUg3_9ejy71F1HkpCdQ2dwr9n36SpMS_P2D7jFROSNY3zxcZwDpl_texYM_2FOayQvupr2AS-0ErmPXHljtn9gFFCzjFU6eRxgWq_FMlJfPRkLugThlK5S0f3fWnuOfq5Ck-zSHLlvnmIagbDgiJmsDZS-tdIrY8Vkw8Spw9wHMPPw%3D%3D`
        const url = `https://us-east-1.quicksight.aws.amazon.com/embed/f8ec24bc1c7642ef88603c0d7a60e2fe/dashboards/15f0d094-d6a9-4079-b00d-58aed8f5bc38`
        //const url = ``

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
