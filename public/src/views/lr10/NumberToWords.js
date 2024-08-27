function splitNumberIntoDigits(number) {
        const digits = number.toString().split('').reverse();
        const digitNames = {
            0: 'simple',
            1: 'decimal',
            2: 'hungred',
            3: 'thouthen'
            // Можна розширити для більш великих чисел
        };
        console.log(digits)

        let result = [];

        digits.forEach((digit, index) => {
            const digitName = digitNames[index];

            if (digitName) {
                result.push({ [digitName]: parseInt(digit, 10) });
            }
        });
        result.reverse()
        digits.reverse()
        if (2<=digits.length){
            if((digits[digits.length-2]==1) && (digits[digits.length-1])!=0){
                result[digits.length-2]={"ten":Number(digits[digits.length-1])}
                result[digits.length-1]={"simple":0};
            }
        }
        console.log(result)
        return result;
    }
    const xmlStringPromise = fetch('lab10.xml')
        .then(response => response.text())
        .then(xmlString => {
            return xmlString;
        })
        .catch(error => {
            console.error('Error fetching XML:', error);
            return null;
        });

    async function getDigit(number) {
        const xmlString = await xmlStringPromise; // Ждем, пока XML будет доступна

        if (xmlString !== null) {
            const arr = splitNumberIntoDigits(number);
            return await getEquivalentsFromXML(arr, xmlString);
        } else {
            console.error('XML data is null');
        }
    }


    function getEquivalentsFromXML(digitsArray, xmlString) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

        let result =  "";

        digitsArray.forEach(digit => {
            const digitName = Object.keys(digit)[0];
            const digitValue = digit[digitName];

            const numberNodes = xmlDoc.querySelectorAll('number');

            numberNodes.forEach(node => {
                const equilNode = node.querySelector('equil');
                if (equilNode && equilNode.textContent === digitValue.toString()) {
                    const equivalentTexts = node.querySelector(digitName + ' text').textContent;

                        result+= equivalentTexts +" ";
                }
            });
        });

        return result;
    }