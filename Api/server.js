const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const FreshFruitsRoute = require('./FreshFruits/freshFruits.route');
const FreshVegRoute = require('./FreshVeg/FreshVeg.Route')
const ExoticFruVegRoute = require('./ExoticFruVeg/exoticFruits.route')
const OrganicFruVegRoute = require('./OrganicFruVeg/organicFruits.route')
const HerbsRoute= require('./Herbs/herbSeasonings.route')
const FlourRoute=require('./Flour/flourAtta.route')
const RiceRoute=require('./Rice/riceProduct.route')
const StaplesRoute=require('./Staples/organicStaples.route')
const DalRoute=require('./Dal/dalPulses.route')
const OilsRoute=require('./Oils/oilGhee.route')
const SaltRoute=require('./Salt/saltSugar.route')
const SpicesRoute=require('./Spices/masalaSpices.route')
const DryRoute=require('./Dry/dryFruits.route')
const DairyRoute=require('./Dairy/dairy.route')
const BreadRoute=require('./Bread/bread.route')
const CakeRoute=require('./Cake/cake.route')
const CookieRoute=require('./Cookie/cookie.route')
const IceRoute=require('./Ice/ice.route')
const BarRoute=require('./Bars/bar.route')
const LiquidRoute=require('./Liquid/liquid.route')
const FreshenerRoute=require('./Freshener/freshener.route')
const UtensilRoute=require('./Utensil/utensil.route')
const TeaRoute=require('./Tea/tea.route')
const CoffeeRoute=require('./Coffee/coffee.route')
const WaterRoute=require('./Water/water.route')
const HealthRoute=require('./Health/healthDrink.route')
const EnergyRoute=require('./Energy/energyDrink.route')
const JuicesRoute=require('./Juices/freshJuice.route')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hrithik:'+ process.env.MONGO_ATLAS_PW +'@node-rest-api-shard-00-00-ggreo.mongodb.net:27017,node-rest-api-shard-00-01-ggreo.mongodb.net:27017,node-rest-api-shard-00-02-ggreo.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-api-shard-0&authSource=admin&retryWrites=true',
  { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use('/ff',express.static('ff'))
app.use('/fv',express.static('fv'))
app.use('/ef',express.static('ef'))
app.use('/ofv',express.static('ofv'))
app.use('/hs',express.static('hs'))
app.use('/af',express.static('af'))
app.use('/rp',express.static('rp'))
app.use('/os',express.static('os'))
app.use('/dp',express.static('dp'))
app.use('/ss',express.static('ss'))
app.use('/ms',express.static('ms'))
app.use('/og',express.static('og'))
app.use('/df',express.static('df'))
app.use('/dm',express.static('dm'))
app.use('/br',express.static('br'))
app.use('/cak',express.static('cak'))
app.use('/cook',express.static('cook'))
app.use('/ic',express.static('ic'))
app.use('/bar',express.static('bar'))
app.use('/liq',express.static('liq'))
app.use('/fr',express.static('fr'))
app.use('/ut',express.static('ut'))
app.use('/te',express.static('te'))
app.use('/cof',express.static('cof'))
app.use('/wat',express.static('wat'))
app.use('/hd',express.static('hd'))
app.use('/ed',express.static('ed'))
app.use('/fj',express.static('fj'))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/FreshFruits', FreshFruitsRoute);
app.use('/FreshVeg', FreshVegRoute );
app.use('/ExoticFruVeg',ExoticFruVegRoute);
app.use('/OrganicFruVeg',OrganicFruVegRoute);
app.use('/Herbs',HerbsRoute);
app.use('/Flour',FlourRoute);
app.use('/Rice',RiceRoute);
app.use('/Staples',StaplesRoute)
app.use('/Dal',DalRoute)
app.use('/Oils',OilsRoute)
app.use('/Salt',SaltRoute)
app.use('/Spices',SpicesRoute)
app.use('/Dry',DryRoute);
app.use('/Dairy',DairyRoute);
app.use('/Bread',BreadRoute)
app.use('/Cake',CakeRoute)
app.use('/Cookie',CookieRoute)
app.use('/Ice',IceRoute)
app.use('/Bar',BarRoute)
app.use('/Liquid',LiquidRoute)
app.use('/Freshener',FreshenerRoute)
app.use('/Utensil',UtensilRoute)
app.use('/Tea',TeaRoute)
app.use('/Coffee',CoffeeRoute)
app.use('/Water',WaterRoute)
app.use('/Health',HealthRoute)
app.use('/Energy',EnergyRoute)
app.use('/Juices',JuicesRoute)

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});