var Quark = Object.freeze({
    Up:"up",
    Down:"down"
});

var Lepton = Object.freeze({
    Electron:"electron"
});

var Particle = Object.freeze({
    Proton:{
        hadron:[
            Quark.Up,
            Quark.Up,
            Quark.Down
        ]
    },
    Neutron:{
        hadron:[
            Quark.Up,
            Quark.Down,
            Quark.Down
        ]
    },
    Electron:{}
});

var Atom = function(){
    var self = this;

    this.particles = {
        protons: [],
        neutrons: [],
        electrons: []
    };

    this.addElectron = function(){
        self.particles.electrons.push(Particle.Electron);
    };

    this.addNeutron = function(){
        self.particles.neutrons.push(Particle.Neutron);
    };

    this.addProton = function(){
        self.particles.protons.push(Particle.Proton);
    };

};

var Hydrogen = function(){
    var atom = new Atom();

    atom.addProton();
    atom.addElectron();

    return atom;
};

console.log(Hydrogen()); //XXX