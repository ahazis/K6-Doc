## Pengujian dengan Tahapan (Stages)

    // ----------------------------------------------Load Testing
    export let options = {
        stages: [
            { duration: '1s', target: 10 },
            { duration: '3s', target: 10 },
            { duration: '1s', target: 0 },
        ],
    }

    // ----------------------------------------------Stress testing
    export let options = {
        stages: [
            { duration: '1s', target: 5 },
            { duration: '5s', target: 5 },
            { duration: '5s', target: 10 },
            { duration: '1s', target: 0 },
        ],
    }

    // ----------------------------------------------Spike Testing
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

    Anda dapat mengatur pengujian dengan tahapan untuk mensimulasikan peningkatan dan penurunan beban secara bertahap.
    export let options = {
        stages: [
            { duration: '10s', target: 10 }, // Naik ke 10 VUs dalam 10 detik
            { duration: '20s', target: 20 }, // Naik ke 20 VUs dalam 20 detik
            { duration: '10s', target: 0 },  // Turun ke 0 VUs dalam 10 detik
        ],
    }

## Pengujian dengan Skala Tetap

    export let options = {
        vus: 100, // Jumlah Virtual Users
        duration: '3s', // Durasi tes
    }

    Anda dapat mengatur pengujian dengan skala tetap untuk mempertahankan jumlah VUs yang konstan selama durasi pengujian.

    export let options = {
    scenarios: {
        constant_vus: {
            executor: 'constant-vus',
            vus: 10,
            duration: '1m',
        },
        },
    };




