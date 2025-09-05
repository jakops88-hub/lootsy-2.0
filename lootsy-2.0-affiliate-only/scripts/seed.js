const fs = require('fs')
const path = require('path')
const deals = require('../data/deals.json')
console.log('Demo deals:
', deals.map(d=>`- ${d.title}`).join('\n'))
console.log('\n(Använder lokala data/deals.json tills Supabase är uppsatt.)')
