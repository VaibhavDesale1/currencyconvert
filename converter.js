function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const conversionRates = {
        USD: {
            EUR: 0.85,
            INR: 74.94,
            AED: 3.67,
            CAD: 1.26,
            JPY: 109.54,
            AUD: 1.33,
            CNY: 6.44,
            PHP: 50.34,
            DKK: 6.18,
            GBP: 0.72,
            BRL: 5.21
        },
        EUR: {
            USD: 1.18,
            INR: 88.16,
            AED: 4.36,
            CAD: 1.50,
            JPY: 129.88,
            AUD: 1.58,
            CNY: 7.64,
            PHP: 59.84,
            DKK: 7.34,
            GBP: 0.85,
            BRL: 7.66
        },
        INR: {
            USD: 0.013,
            EUR: 0.011,
            AED: 0.049,
            CAD: 0.017,
            JPY: 1.46,
            AUD: 0.018,
            CNY: 0.088,
            PHP: 1.26,
            DKK: 0.15,
            GBP: 0.013,
            BRL: 0.12
        },
        AED: {
            USD: 0.27,
            EUR: 0.23,
            INR: 20.32,
            CAD: 0.34,
            JPY: 29.51,
            AUD: 0.36,
            CNY: 1.75,
            PHP: 12.81,
            DKK: 2.1,
            GBP: 0.23,
            BRL: 2.04
        },
        CAD: {
            USD: 0.80,
            EUR: 0.67,
            INR: 57.82,
            AED: 2.92,
            JPY: 80.13,
            AUD: 0.98,
            CNY: 4.73,
            PHP: 35.11,
            DKK: 4.32,
            GBP: 0.59,
            BRL: 5.34
        },
        JPY: {
            USD: 0.0091,
            EUR: 0.0077,
            INR: 0.68,
            AED: 0.034,
            CAD: 0.012,
            AUD: 0.013,
            CNY: 0.062,
            PHP: 4.89,
            DKK: 0.60,
            GBP: 0.0073,
            BRL: 0.065
        },
        AUD: {
            USD: 0.75,
            EUR: 0.63,
            INR: 54.36,
            AED: 2.77,
            CAD: 1.02,
            JPY: 76.47,
            CNY: 4.80,
            PHP: 36.38,
            DKK: 4.47,
            GBP: 0.49,
            BRL: 4.40
        },
        CNY: {
            USD: 0.16,
            EUR: 0.13,
            INR: 11.41,
            AED: 0.57,
            CAD: 0.21,
            JPY: 16.22,
            AUD: 0.21,
            PHP: 7.81,
            DKK: 0.96,
            GBP: 0.11,
            BRL: 1.01
        },
        PHP: {
            USD: 0.020,
            EUR: 0.017,
            INR: 0.79,
            AED: 0.078,
            CAD: 0.028,
            JPY: 0.20,
            AUD: 0.028,
            CNY: 0.13,
            DKK: 0.016,
            GBP: 0.015,
            BRL: 0.14
        },
        DKK: {
            USD: 0.16,
            EUR: 0.14,
            INR: 6.44,
            AED: 0.48,
            CAD: 0.23,
            JPY: 1.60,
            AUD: 0.23,
            CNY: 10.15,
            PHP: 63.02,
            GBP: 0.12,
            BRL: 1.10
        },
        GBP: {
            USD: 1.39,
            EUR: 1.17,
            INR: 95.85,
            AED: 4.34,
            CAD: 1.69,
            JPY: 136.80,
            AUD: 2.04,
            CNY: 8.67,
            PHP: 70.27,
            DKK: 8.22,
            BRL: 7.02
        },
        BRL: {
            USD: 0.19,
            EUR: 0.13,
            INR: 8.39,
            AED: 0.49,
            CAD: 0.09,
            JPY: 15.29,
            AUD: 0.23,
            CNY: 1.49,
            PHP: 7.08,
            DKK: 0.91,
            GBP: 0.14
        }
    };

    if (!conversionRates[fromCurrency] || !conversionRates[fromCurrency][toCurrency]) {
        document.getElementById('result').textContent = "Invalid conversion";
    } else {
        const result = amount * conversionRates[fromCurrency][toCurrency];
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    }
}
