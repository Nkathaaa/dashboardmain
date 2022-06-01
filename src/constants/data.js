import images from "./images"

const data = {
    user: {
        name: 'Log In',
        img: images.avt
    },
    summary: [
        {
            title: 'count',
            subtitle: 'Total count today',
            value: '1000',
            percent: 70
        },
        {
            title: 'count',
            subtitle: 'Total count today',
            value: '3000',
            percent: 49
        },
        {
            title: 'count',
            subtitle: 'Total count today',
            value: '678',
            percent: 38
        },
        {
            title: 'count',
            subtitle: 'Total count today',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Overall Count',
        value: '678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'count'
        },
        {
            value: '9.876K',
            title: 'Count'
        },
        {
            value: '1.234K',
            title: 'count'
        },
        {
            value: '$5678',
            title: 'count'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data