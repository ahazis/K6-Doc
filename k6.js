import http from 'k6/http'
import { check, group } from 'k6'
// HTML Report
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js"


// spike Testing
export let options = {
    stages: [
        { duration: '1s', target: 5 },
        { duration: '2s', target: 5 },
        { duration: '1s', target: 10 },
        { duration: '1s', target: 5 },
        { duration: '1s', target: 20 },
        { duration: '1s', target: 5 },
        { duration: '2s', target: 5 },
        { duration: '1s', target: 0 },
    ],
}

export default function () {
    group('GET Testing', () => {
        // GET request
        let responseGET1 = http.get('https://reqres.in/api/users?page=2');
        check(responseGET1, {
            'status is 200': (r) => r.status === 200,
            'response time is less than 2000': (r) => r.timings.duration < 2000
        })

        // Sub Group GET
        // group('Sub Group GET', () => {
        //     // GET request
        //     let url = 'https://reqres.in/api/users?page=2';
        //     let responseGET2 = http.get(url);
        //     check(responseGET2, {
        //         'status is 200': (r) => r.status === 200,
        //         'response time is less than 2000': (r) => r.timings.duration < 2000
        //     })
        // })
    })

    // group('POST Testing', () => {
    //     // POST request
    //     const url = 'https://reqres.in/api/users'
    //     const body = JSON.stringify({
    //         name: 'morpheus',
    //         job: 'leader'
    //     })

    //     let responsePOST2 = http.post(url, body)
    //     check(responsePOST2, {
    //         'status is 201': (r) => r.status === 201,
    //         'response time is less than 2000': (r) => r.timings.duration < 2000
    //     })
    //     console.log(responsePOST2.status)
    //     console.log(JSON.parse(responsePOST2.body))

    // })
}

// HTML Report
export function handleSummary(data) {
    return {
      "HTML_report_result.html": htmlReport(data),
      stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}
