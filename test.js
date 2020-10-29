const express = require('express')
const app = express()
const port = 2000
const path = require('path')



app.use(express.static(path.join(__dirname, 'public')));

app.get('/download', (req, res) => {

    //set properties
var vCardsJS = require('vcards-js');
 
//create a new vCard
var vCard = vCardsJS();
 
//multiple email entry
vCard.email = [
    'e.nesser@emailhost.tld',
    'e.nesser@emailhost2.tld',
    'e.nesser@emailhost3.tld'
];
 
//multiple cellphone
vCard.cellPhone = [
    '312-555-1414',
    '312-555-1415',
    '312-555-1416'
];

 
res.set('Content-Type', 'text/vcard; name="enesser.vcf"');
res.set('Content-Disposition', 'inline; filename="enesser.vcf"');

//send the response
res.send(vCard.getFormattedString());

})
 


app.listen(port)