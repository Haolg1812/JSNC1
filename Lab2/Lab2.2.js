document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener
('click', function(){
    const text = document.querySelector('Textarea')
    .value;
    const rows = text.split('\n');
    console.log(rows);
   
    for (const row of rows){
        const [first, second] = row.toLowerCase().trim().
        split('_');
        const output = `${first } ${second.replace(second[0],second[0].toLowerCase)}`
        console.log(`${output.padEnd(20)}${''.repeat(i + 1) }`);
    }

})