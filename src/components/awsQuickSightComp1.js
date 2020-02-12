import React, { Component } from 'react';
import { embedDashboard } from 'amazon-quicksight-embedding-sdk';
// The entire module:
import * as QuickSight from 'aws-sdk/clients/quicksight';
import { Auth } from "aws-amplify";

export default class AwsQuickSightComp1 extends Component {

    componentDidMount() {
        const quicksight = new QuickSight({
            region: "us-east-1",
            credentials: Auth.currentCredentials(),
        });
        const url = quicksight.getDashboardEmbedUrl({ AwsAccountId: "174926533776", IdentityType: "IAM", DashboardId: "f0cc0c85-0cbe-4904-9abf-961850735e56" }).promise()
        .then((result) => {
            console.log("Result: " + result);
        }).catch(error => {
            console.error(error);
        });
        const options = {
            url,
            container: document.getElementById("dashboardContainer"),
            parameters: {
                country: "United States",
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
    }

    render() {
    //    console.log(options)
        return (
            <div>
                <div>
                    <h4>Greetings from AwsQuickSightComp1</h4>
                </div>
                <div id="dashboardContainer"></div>
            </div>

        )
    }


}
