const text = `
The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"
`

function firstNonRepeat(text) {
    const wordsArr = text.match(/\b(\w+)\b/g)
    const result = []

    for (let i = 0; i < wordsArr.length; i++) {
        for (let j = 0; j < wordsArr[i].length; j++) {
            if (wordsArr[i].indexOf(wordsArr[i].charAt(j), wordsArr[i].indexOf(wordsArr[i].charAt(j)) + 1) == -1) {
                result.push(wordsArr[i][j])

                break
            }
        }
    }

    const resultString = result.join('')
    let nonRepeatChar = ''

    for (let i = 0; i < resultString.length; i++) {
        if (resultString.indexOf(resultString.charAt(i), resultString.indexOf(resultString.charAt(i)) + 1) == -1) {
            nonRepeatChar = resultString[i]

            break
        }
    }

    return nonRepeatChar
}

console.log(firstNonRepeat(text))
