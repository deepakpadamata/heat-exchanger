'use strict';

angular.module('hxApp')
  .controller('MainCtrl', function ($scope, $http, $filter)   {
    $scope.hotFluidOptions = hotFluidOptions;
    $scope.coldFluidOptions = coldFluidOptions;
    $scope.sideOptions = sideOptions;
    $scope.typicalUValues = typicalUValues;
    $scope.lengthOptions = lengthOptions;
    $scope.tempOptions = tempOptions;
    $scope.densityOptions = densityOptions;
    $scope.viscosityOptions = viscosityOptions;
    $scope.conductivityOptions = conductivityOptions;
    $scope.specificHeatOptions = specificHeatOptions;
    $scope.foulingFactorOptions = foulingFactorOptions;
    $scope.heatTransferCoefficientOptions = heatTransferCoefficientOptions;
    $scope.massFlowOptions = massFlowOptions;
    $scope.volumeFlowOptions = volumeFlowOptions;
    $scope.gaugeOptions = gaugeOptions;
    $scope.gaugeRangeOptions = gaugeRangeOptions;
    $scope.passesOptions = passesOptions;

    $scope.BWGValues = BWGValues;
    $scope.SWGValues = SWGValues;
    $scope.AWGValues = AWGValues;

    $scope.R = 0;
    $scope.S = 0;
    $scope.hot = {
      material: "Organic Solvents",
      side: "Shell Side",
      temp:{
        In:{
          input: 135,
          unit: "C"
        },
        Out:{
          input: 40,
          unit: "C"
        }
      },
      density: {
        unit: "kg/m3",
        input: 840,
      },
      viscosity: {
        unit: "cP",
        input: 0.33,
      },
      conductivity: {
        unit: "J/s m K",
        input: 0.1156,
      },
      specificHeat: {
        unit: "KJ/kg K",
        input: 2.093,
      },
      foulingFactor: {
        unit: "h m2C / kcal",
        input: 0.00021,
      }
    };

    $scope.cold = {
      material: "Water",
      side: "Tube Side",
      temp:{
        In:{
          input: 30,
          unit: "C"
        },
        Out:{
          input: 40,
          unit: "C"
        }
      },
      density: {
        unit: "kg/m3",
        input: 993,
      },
      viscosity: {
        unit: "kg/ms",
        input: 0.0008,
      },
      conductivity: {
        unit: "J/s m K",
        input: 0.623,
      },
      specificHeat: {
        unit: "KJ/kg K",
        input: 4.175,
      },
      foulingFactor: {
        unit: "h m2C / kcal",
        input: 0.00035,
      }
    };

    $scope.flow = {
      material: "hot",
      mode: "mass",
      rate: {
        input: 50,
        unit: {
          unit: "tonne/day",
          value: 1.15740741E-02,
        },
      },
    };

    $scope.htc = {
      input: 350,
      unit: "kcal/h m2C"
    }

    $scope.correctionFactor = {
      mode: "auto",
      input: 0.8
    }

    $scope.lmtd = {
      mode: "counterCurrent",
    }

    $scope.design = {
      shellDiameter: {
        input: 10,
        unit: "in"
      },
      tubeClearance: {
        input: 0.0064,
        unit: "m"
      },
      baffleSpacing: {
        input: 0.1,
        unit: "m"
      },
      tubePitch: {
        input: 1,
        unit: "in"
      },
      tubeLength: {
        input: 4.5,
        unit: "m"
      },
      outerDia: {
        input: 0.75,
        unit: "in"
      },
      thickness: {
        input: "16",
        unit: "BWG"
      },
      innerDia: {
        value: 0
      },
      noOfTubes: 35,
      noOfPasses: "4",
      pitchType: "triangular"
    }
    $scope.$watch('htc', function() {
      if ($scope.htc.unit === "W/m2K")   $scope.htc.value = $scope.htc.input;
      if ($scope.htc.unit === "cal/s m2C")  $scope.htc.value = $scope.htc.input * 4.1868;
      if ($scope.htc.unit === "kcal/h m2C")  $scope.htc.value = $scope.htc.input * 1.163;
      if ($scope.htc.unit === "BTU/hr ft2F") $scope.htc.value = $scope.htc.input * 5.67826;
    }, true)

    $scope.$watch('hot', function() {
      if ($scope.hot.temp.In.unit === "K") $scope.hot.temp.In.value = $scope.hot.temp.In.input;
      if ($scope.hot.temp.In.unit === "C") $scope.hot.temp.In.value = $scope.hot.temp.In.input + 273.15;
      if ($scope.hot.temp.In.unit === "F") $scope.hot.temp.In.value =($scope.hot.temp.In.input + 459.67) * 5 / 9;

      if ($scope.hot.temp.Out.unit === "K") $scope.hot.temp.Out.value = $scope.hot.temp.Out.input;
      if ($scope.hot.temp.Out.unit === "C") $scope.hot.temp.Out.value = $scope.hot.temp.Out.input + 273.15;
      if ($scope.hot.temp.Out.unit === "F") $scope.hot.temp.Out.value =($scope.hot.temp.Out.input + 459.67) * 5 / 9;

      if ($scope.hot.density.unit === "kg/m3")  $scope.hot.density.value = $scope.hot.density.input;
      if ($scope.hot.density.unit === "g/L")    $scope.hot.density.value = $scope.hot.density.input;
      if ($scope.hot.density.unit === "g/cm3")  $scope.hot.density.value = $scope.hot.density.input * 1000;
      if ($scope.hot.density.unit === "lb/ft3") $scope.hot.density.value = $scope.hot.density.input * 16.0184634;
      if ($scope.hot.density.unit === "lb/in3") $scope.hot.density.value = $scope.hot.density.input * 27679.9047;

      if ($scope.hot.viscosity.unit === "kg/ms") $scope.hot.viscosity.value = $scope.hot.viscosity.input;
      if ($scope.hot.viscosity.unit === "P")     $scope.hot.viscosity.value = $scope.hot.viscosity.input * 0.01;
      if ($scope.hot.viscosity.unit === "cP")    $scope.hot.viscosity.value = $scope.hot.viscosity.input * 0.0001;

      if ($scope.hot.conductivity.unit === "W/m K")       $scope.hot.conductivity.value = $scope.hot.conductivity.input;
      if ($scope.hot.conductivity.unit === "J/s m K")     $scope.hot.conductivity.value = $scope.hot.conductivity.input;
      if ($scope.hot.conductivity.unit === "BTU/hr ft F") $scope.hot.conductivity.value = $scope.hot.conductivity.input * 1.73;

      if ($scope.hot.specificHeat.unit === "J/kg K")   $scope.hot.specificHeat.value = $scope.hot.specificHeat.input;
      if ($scope.hot.specificHeat.unit === "KJ/kg K")  $scope.hot.specificHeat.value = $scope.hot.specificHeat.input * 1000;
      if ($scope.hot.specificHeat.unit === "cal/g C")  $scope.hot.specificHeat.value = $scope.hot.specificHeat.input * 4186.798188;
      if ($scope.hot.specificHeat.unit === "BTU/lb F") $scope.hot.specificHeat.value = $scope.hot.specificHeat.input * 4186.798188;

      if ($scope.hot.foulingFactor.unit === "m2K / W")       $scope.hot.foulingFactor.value = $scope.hot.foulingFactor.input;
      if ($scope.hot.foulingFactor.unit === "s m2C / cal")   $scope.hot.foulingFactor.value = $scope.hot.foulingFactor.input / 4.1868;
      if ($scope.hot.foulingFactor.unit === "h m2C / kcal")  $scope.hot.foulingFactor.value = $scope.hot.foulingFactor.input / 1.163;
      if ($scope.hot.foulingFactor.unit === "hr ft2F / BTU") $scope.hot.foulingFactor.value = $scope.hot.foulingFactor.input / 5.67826;
    }, true)
 
    $scope.$watch('cold', function() {
      if ($scope.cold.temp.In.unit === "K") $scope.cold.temp.In.value = $scope.cold.temp.In.input;
      if ($scope.cold.temp.In.unit === "C") $scope.cold.temp.In.value = $scope.cold.temp.In.input + 273.15;
      if ($scope.cold.temp.In.unit === "F") $scope.cold.temp.In.value =($scope.cold.temp.In.input + 459.67) * 5 / 9;

      if ($scope.cold.temp.Out.unit === "K") $scope.cold.temp.Out.value = $scope.cold.temp.Out.input;
      if ($scope.cold.temp.Out.unit === "C") $scope.cold.temp.Out.value = $scope.cold.temp.Out.input + 273.15;
      if ($scope.cold.temp.Out.unit === "F") $scope.cold.temp.Out.value =($scope.cold.temp.Out.input + 459.67) * 5 / 9;

      if ($scope.cold.density.unit === "kg/m3")  $scope.cold.density.value = $scope.cold.density.input;
      if ($scope.cold.density.unit === "g/L")    $scope.cold.density.value = $scope.cold.density.input;
      if ($scope.cold.density.unit === "g/cm3")  $scope.cold.density.value = $scope.cold.density.input * 1000;
      if ($scope.cold.density.unit === "lb/ft3") $scope.cold.density.value = $scope.cold.density.input * 16.0184634;
      if ($scope.cold.density.unit === "lb/in3") $scope.cold.density.value = $scope.cold.density.input * 27679.9047;

      if ($scope.cold.viscosity.unit === "kg/ms") $scope.cold.viscosity.value = $scope.cold.viscosity.input;
      if ($scope.cold.viscosity.unit === "P")     $scope.cold.viscosity.value = $scope.cold.viscosity.input * 0.01;
      if ($scope.cold.viscosity.unit === "cP")    $scope.cold.viscosity.value = $scope.cold.viscosity.input * 0.0001;

      if ($scope.cold.conductivity.unit === "W/m K")       $scope.cold.conductivity.value = $scope.cold.conductivity.input;
      if ($scope.cold.conductivity.unit === "J/s m K")     $scope.cold.conductivity.value = $scope.cold.conductivity.input;
      if ($scope.cold.conductivity.unit === "BTU/hr ft F") $scope.cold.conductivity.value = $scope.cold.conductivity.input * 1.73;

      if ($scope.cold.specificHeat.unit === "J/kg K")   $scope.cold.specificHeat.value = $scope.cold.specificHeat.input;
      if ($scope.cold.specificHeat.unit === "KJ/kg K")  $scope.cold.specificHeat.value = $scope.cold.specificHeat.input * 1000;
      if ($scope.cold.specificHeat.unit === "cal/g C")  $scope.cold.specificHeat.value = $scope.cold.specificHeat.input * 4186.798188;
      if ($scope.cold.specificHeat.unit === "BTU/lb F") $scope.cold.specificHeat.value = $scope.cold.specificHeat.input * 4186.798188;

      if ($scope.cold.foulingFactor.unit === "m2K / W")       $scope.cold.foulingFactor.value = $scope.cold.foulingFactor.input;
      if ($scope.cold.foulingFactor.unit === "s m2C / cal")   $scope.cold.foulingFactor.value = $scope.cold.foulingFactor.input / 4.1868;
      if ($scope.cold.foulingFactor.unit === "h m2C / kcal")  $scope.cold.foulingFactor.value = $scope.cold.foulingFactor.input / 1.163;
      if ($scope.cold.foulingFactor.unit === "hr ft2F / BTU") $scope.cold.foulingFactor.value = $scope.cold.foulingFactor.input / 5.67826;
    }, true)

    
    $scope.$watchGroup(['hot.temp.In.value', 'hot.temp.Out.value', 'hot.specificHeat.value', 'cold.specificHeat.value', 'cold.temp.In.value', 'cold.temp.Out.value', 'flow.rate.value', 'flow.material'], function () {
      var selectedMaterial = $scope[$scope.flow.material]
      $scope.heatDuty = $scope.flow.rate.value * selectedMaterial.specificHeat.value * Math.abs(selectedMaterial.temp.In.value - selectedMaterial.temp.Out.value);
      if ($scope.flow.material === "hot"){
        $scope.flow.rate.hotValue = $scope.flow.rate.value;
        $scope.flow.rate.coldValue = $scope.heatDuty / ($scope.cold.specificHeat.value * Math.abs($scope.cold.temp.Out.value - $scope.cold.temp.In.value))
      }
      if ($scope.flow.material === "cold"){
        $scope.flow.rate.coldValue = $scope.flow.rate.value;
        $scope.flow.rate.hotValue = $scope.heatDuty / ($scope.hot.specificHeat.value * Math.abs($scope.hot.temp.Out.value - $scope.hot.temp.In.value))
      }
    })

    $scope.$watchGroup(['hot.temp.In.value', 'hot.temp.Out.value', 'cold.temp.In.value', 'cold.temp.Out.value', 'hot.side', 'cold.side', 'correctionFactor.input', 'correctionFactor.mode'], function () {
      if ($scope.hot.side === "Shell Side") {
        $scope.R = ($scope.hot.temp.In.value - $scope.hot.temp.Out.value)/($scope.cold.temp.Out.value - $scope.cold.temp.In.value);
        $scope.S = ($scope.cold.temp.Out.value - $scope.cold.temp.In.value)/($scope.hot.temp.In.value - $scope.cold.temp.In.value);
      }
      if ($scope.hot.side === "Tube Side") {
        $scope.R = ($scope.cold.temp.In.value - $scope.cold.temp.Out.value)/($scope.hot.temp.Out.value - $scope.hot.temp.In.value);
        $scope.S = ($scope.hot.temp.Out.value - $scope.hot.temp.In.value)/($scope.cold.temp.In.value - $scope.hot.temp.In.value);
      }
      var R = $scope.R,
          S = $scope.S,
          T = Math.sqrt(Math.pow(R, 2) + 1);
      if ($scope.correctionFactor.mode === "auto") $scope.correctionFactor.value = T * Math.log((1-S) / (1 - R * S)) / ((R - 1) * Math.log( (2 - S*(R+1-T)) / (2 - S*(R+1+T)) ));
      if ($scope.correctionFactor.mode === "manual") $scope.correctionFactor.value = $scope.correctionFactor.input;
    })

    $scope.$watchGroup(['hot.temp.In.value', 'hot.temp.Out.value', 'cold.temp.In.value', 'cold.temp.Out.value', 'hot.side', 'cold.side', 'lmtd.mode', 'correctionFactor.value'], function () {
      if ($scope.lmtd.mode === "parallel"){
        if ($scope.hot.side === "Shell Side"){
          $scope.lmtd.hotEndsTempDiff = $scope.hot.temp.In.value - $scope.cold.temp.In.value;
          $scope.lmtd.coldEndsTempDiff = $scope.hot.temp.Out.value - $scope.cold.temp.Out.value;
        }
        if ($scope.cold.side === "Shell Side"){
          $scope.lmtd.hotEndsTempDiff = $scope.cold.temp.In.value - $scope.hot.temp.In.value;
          $scope.lmtd.coldEndsTempDiff = $scope.cold.temp.Out.value - $scope.hot.temp.Out.value;
        }
      }
      if ($scope.lmtd.mode === "counterCurrent"){
        if ($scope.hot.side === "Shell Side"){
          $scope.lmtd.hotEndsTempDiff = $scope.hot.temp.In.value - $scope.cold.temp.Out.value;
          $scope.lmtd.coldEndsTempDiff = $scope.hot.temp.Out.value - $scope.cold.temp.In.value;
        }
        if ($scope.cold.side === "Shell Side"){
          $scope.lmtd.hotEndsTempDiff = $scope.cold.temp.In.value - $scope.hot.temp.Out.value;
          $scope.lmtd.coldEndsTempDiff = $scope.cold.temp.Out.value - $scope.hot.temp.In.value;
        }
      }
      $scope.lmtd.value = ($scope.lmtd.hotEndsTempDiff - $scope.lmtd.coldEndsTempDiff) / Math.log($scope.lmtd.hotEndsTempDiff/$scope.lmtd.coldEndsTempDiff);
      $scope.lmtd.correctedValue = $scope.lmtd.value * $scope.correctionFactor.value;

      if ($scope.lmtd.correctedValue === 0)      {
        $scope.lmtd.heatTransferArea = $scope.heatDuty/($scope.htc.value * $scope.lmtd.value)
      }
      else {
        $scope.lmtd.heatTransferArea = $scope.heatDuty/($scope.htc.value * $scope.lmtd.correctedValue)
      }
    })

    $scope.$watch('flow', function() {
      var selectedMaterial = $scope[$scope.flow.material]

      if ($scope.flow.mode === "mass") {
        $scope.flowOptions = $scope.massFlowOptions;
        $scope.flow.rate.value = $scope.flow.rate.input * $scope.flow.rate.unit.value;
      }
      if ($scope.flow.mode === "volume") {
        $scope.flowOptions = $scope.volumeFlowOptions;
        $scope.flow.rate.value = $scope.flow.rate.input * $scope.flow.rate.unit.value * selectedMaterial.density.value;
      }
    }, true)

    $scope.$watch('design', function () {
      if ($scope.design.shellDiameter.unit === "m")  $scope.design.shellDiameter.value = $scope.design.shellDiameter.input;
      if ($scope.design.shellDiameter.unit === "cm") $scope.design.shellDiameter.value = $scope.design.shellDiameter.input / 100;
      if ($scope.design.shellDiameter.unit === "mm") $scope.design.shellDiameter.value = $scope.design.shellDiameter.input / 1000;
      if ($scope.design.shellDiameter.unit === "ft") $scope.design.shellDiameter.value = $scope.design.shellDiameter.input / 3.28;
      if ($scope.design.shellDiameter.unit === "in") $scope.design.shellDiameter.value = $scope.design.shellDiameter.input * 0.0254;

      if ($scope.design.tubeClearance.unit === "m")  $scope.design.tubeClearance.value = $scope.design.tubeClearance.input;
      if ($scope.design.tubeClearance.unit === "cm") $scope.design.tubeClearance.value = $scope.design.tubeClearance.input / 100;
      if ($scope.design.tubeClearance.unit === "mm") $scope.design.tubeClearance.value = $scope.design.tubeClearance.input / 1000;
      if ($scope.design.tubeClearance.unit === "ft") $scope.design.tubeClearance.value = $scope.design.tubeClearance.input / 3.28;
      if ($scope.design.tubeClearance.unit === "in") $scope.design.tubeClearance.value = $scope.design.tubeClearance.input * 0.0254;

      if ($scope.design.baffleSpacing.unit === "m")  $scope.design.baffleSpacing.value = $scope.design.baffleSpacing.input;
      if ($scope.design.baffleSpacing.unit === "cm") $scope.design.baffleSpacing.value = $scope.design.baffleSpacing.input / 100;
      if ($scope.design.baffleSpacing.unit === "mm") $scope.design.baffleSpacing.value = $scope.design.baffleSpacing.input / 1000;
      if ($scope.design.baffleSpacing.unit === "ft") $scope.design.baffleSpacing.value = $scope.design.baffleSpacing.input / 3.28;
      if ($scope.design.baffleSpacing.unit === "in") $scope.design.baffleSpacing.value = $scope.design.baffleSpacing.input * 0.0254;

      if ($scope.design.tubePitch.unit === "m")  $scope.design.tubePitch.value = $scope.design.tubePitch.input;
      if ($scope.design.tubePitch.unit === "cm") $scope.design.tubePitch.value = $scope.design.tubePitch.input / 100;
      if ($scope.design.tubePitch.unit === "mm") $scope.design.tubePitch.value = $scope.design.tubePitch.input / 1000;
      if ($scope.design.tubePitch.unit === "ft") $scope.design.tubePitch.value = $scope.design.tubePitch.input / 3.28;
      if ($scope.design.tubePitch.unit === "in") $scope.design.tubePitch.value = $scope.design.tubePitch.input * 0.0254;

      if ($scope.design.tubeLength.unit === "m")  $scope.design.tubeLength.value = $scope.design.tubeLength.input;
      if ($scope.design.tubeLength.unit === "cm") $scope.design.tubeLength.value = $scope.design.tubeLength.input / 100;
      if ($scope.design.tubeLength.unit === "mm") $scope.design.tubeLength.value = $scope.design.tubeLength.input / 1000;
      if ($scope.design.tubeLength.unit === "ft") $scope.design.tubeLength.value = $scope.design.tubeLength.input / 3.28;
      if ($scope.design.tubeLength.unit === "in") $scope.design.tubeLength.value = $scope.design.tubeLength.input * 0.0254;

      if ($scope.design.outerDia.unit === "m")  $scope.design.outerDia.value = $scope.design.outerDia.input;
      if ($scope.design.outerDia.unit === "cm") $scope.design.outerDia.value = $scope.design.outerDia.input / 100;
      if ($scope.design.outerDia.unit === "mm") $scope.design.outerDia.value = $scope.design.outerDia.input / 1000;
      if ($scope.design.outerDia.unit === "ft") $scope.design.outerDia.value = $scope.design.outerDia.input / 3.28;
      if ($scope.design.outerDia.unit === "in") $scope.design.outerDia.value = $scope.design.outerDia.input * 0.0254;

      if ($scope.design.thickness.unit === "BWG") $scope.design.thickness.value = $filter('filter')($scope.BWGValues, {key: $scope.design.thickness.input}, true)[0].value;
      if ($scope.design.thickness.unit === "SWG") $scope.design.thickness.value = $filter('filter')($scope.SWGValues, {key: $scope.design.thickness.input}, true)[0].value;
      if ($scope.design.thickness.unit === "AWG") $scope.design.thickness.value = $filter('filter')($scope.AWGValues, {key: $scope.design.thickness.input}, true)[0].value;

      $scope.design.innerDia.value = $scope.design.outerDia.value - 2 * $scope.design.thickness.value;
      $scope.design.outerSurfaceArea = Math.PI * $scope.design.outerDia.value * $scope.design.tubeLength.value;

      if ($scope.design.pitchType === "triangular") $scope.design.equivalentDiameter = 4*(Math.pow($scope.design.tubePitch.value, 2)*0.86 - Math.PI*Math.pow($scope.design.outerDia.value, 2) / 4)/(Math.PI*$scope.design.outerDia.value);
      if ($scope.design.pitchType === "square")     $scope.design.equivalentDiameter = 4*(Math.pow($scope.design.tubePitch.value, 2) - Math.PI*Math.pow($scope.design.outerDia.value, 2) / 4)/(Math.PI*$scope.design.outerDia.value);

      $scope.design.tubesPerPass = Math.ceil($scope.design.noOfTubes / parseInt($scope.design.noOfPasses));
      $scope.design.flowArea = $scope.design.tubeClearance.value * $scope.design.baffleSpacing.value * $scope.design.shellDiameter.value / $scope.design.tubePitch.value;
      $scope.design.flowAreaOfTube = $scope.design.tubesPerPass * Math.PI * Math.pow($scope.design.innerDia.value, 2) / 4;
      $scope.design.linearVelocityOfTube = $scope.flow.rate.coldValue / ($scope.design.flowAreaOfTube * $scope.cold.density.value) ;
      $scope.design.massVelocityOfTube = $scope.flow.rate.coldValue / $scope.design.flowAreaOfTube ;
      $scope.design.massVelocity = $scope.flow.rate.hotValue / $scope.design.flowArea;
    }, true)

    $scope.$watchGroup(['design.equivalentDiameter', 'design.massVelocity', 'design.linearVelocityOfTube', 'design.innerDia.value', 'hot.side', 'hot.viscosity.value', 'hot.specificHeat.value', 'hot.conductivity.value', 'hot.density.value', 'cold.side', 'cold.viscosity.value', 'cold.specificHeat.value', 'cold.conductivity.value', 'cold.density.value'], function () {
      if ($scope.hot.side === "Shell Side"){
        $scope.hot.reynolds = $scope.design.equivalentDiameter * $scope.design.massVelocity / $scope.hot.viscosity.value;
        $scope.hot.prandtl = $scope.hot.specificHeat.value * $scope.hot.viscosity.value / $scope.hot.conductivity.value;

        $scope.cold.reynolds = $scope.cold.density.value * $scope.design.linearVelocityOfTube * $scope.design.innerDia.value / $scope.cold.viscosity.value;
        $scope.cold.prandtl = $scope.cold.specificHeat.value * $scope.cold.viscosity.value / $scope.cold.conductivity.value;

        $scope.nusseltNumberShell = 0.36 * Math.pow($scope.hot.reynolds , 0.55) * Math.pow($scope.hot.prandtl, 0.33);

        if($scope.cold.reynolds < 2300){
          $scope.tubeFlow = "Laminar Flow";
          $scope.nusseltNumberTube = 3.66 + (0.0668 * $scope.design.innerDia.value * $scope.cold.reynolds * $scope.cold.prandtl);
        } 
        if($scope.cold.reynolds > 2300 && $scope.cold.reynolds < 4000){
         $scope.tubeFlow = "Transitional Flow";
         $scope.nusseltNumberTube = 0;
        }
        if($scope.cold.reynolds > 4000){
          $scope.tubeFlow = "Turbulent Flow";
          $scope.nusseltNumberTube = 0.027 * Math.pow($scope.cold.reynolds , 0.8) * Math.pow($scope.cold.prandtl, 0.3);
        }

        $scope.shellReynolds = $scope.hot.reynolds;
        $scope.tubeReynolds = $scope.cold.reynolds;
        $scope.shellPrandtl = $scope.hot.prandtl;
        $scope.tubePrandtl = $scope.cold.prandtl;
        $scope.shellSideHTCoefficient = $scope.nusseltNumberShell * $scope.hot.conductivity.value   / $scope.design.equivalentDiameter;
        $scope.tubeSideHTCoefficient = $scope.nusseltNumberTube * $scope.cold.conductivity.value / $scope.design.innerDia.value;

        $scope.overallHTCoefficient = 1/((1/$scope.shellSideHTCoefficient) + $scope.hot.foulingFactor.value + ($scope.design.outerDia.value / $scope.design.innerDia.value) * $scope.cold.foulingFactor.value + $scope.design.outerDia.value /($scope.design.innerDia.value * $scope.tubeSideHTCoefficient));
      }
      if ($scope.hot.side === "Tube Side"){
        $scope.hot.reynolds = $scope.hot.density.value * $scope.design.linearVelocityOfTube * $scope.design.innerDia.value / $scope.hot.viscosity.value;
        $scope.hot.prandtl = $scope.hot.specificHeat.value * $scope.hot.viscosity.value / $scope.hot.conductivity.value;

        $scope.cold.reynolds = $scope.design.equivalentDiameter * $scope.design.massVelocity / $scope.cold.viscosity.value;
        $scope.cold.prandtl = $scope.cold.specificHeat.value * $scope.cold.viscosity.value / $scope.cold.conductivity.value;

        $scope.nusseltNumberShell = 0.36 * Math.pow($scope.cold.reynolds , 0.55) * Math.pow($scope.cold.prandtl, 0.33);

        if($scope.hot.reynolds < 2300){
          $scope.tubeFlow = "Laminar Flow";
          $scope.nusseltNumberTube = 3.66 + (0.0668 * $scope.design.innerDia.value * $scope.hot.reynolds * $scope.hot.prandtl);
        } 
        if($scope.hot.reynolds > 2300 && $scope.hot.reynolds < 4000){
         $scope.tubeFlow = "Transitional Flow";
         $scope.nusseltNumberTube = 0;
        }
        if($scope.hot.reynolds > 4000){
          $scope.tubeFlow = "Turbulent Flow";
          $scope.nusseltNumberTube = 0.027 * Math.pow($scope.hot.reynolds , 0.8) * Math.pow($scope.hot.prandtl, 0.3);
        }

        $scope.shellReynolds = $scope.cold.reynolds;
        $scope.tubeReynolds = $scope.hot.reynolds;
        $scope.shellPrandtl = $scope.cold.prandtl;
        $scope.tubePrandtl = $scope.hot.prandtl;
        $scope.shellSideHTCoefficient = $scope.nusseltNumberShell * $scope.cold.conductivity.value   / $scope.design.equivalentDiameter;
        $scope.tubeSideHTCoefficient = $scope.nusseltNumberTube * $scope.hot.conductivity.value / $scope.design.innerDia.value;
        $scope.overallHTCoefficient = 1/((1/$scope.shellSideHTCoefficient) + $scope.cold.foulingFactor.value + ($scope.design.outerDia.value / $scope.design.innerDia.value) * $scope.hot.foulingFactor.value + $scope.design.outerDia.value /($scope.design.innerDia.value * $scope.tubeSideHTCoefficient));
      }
    })

    $scope.$watchGroup(['shellReynolds', 'tubeReynolds', 'shellFrictionFactor', 'tubeFrictionFactor', 'hot.density.value', 'cold.density.value', 'design.massVelocityOfTube', 'design.linearVelocityOfTube', 'design.tubeLength.value', 'design.massVelocity', 'design.baffleSpacing.value', 'design.shellDiameter.value', 'design.noOfPasses', ], function () {
      $scope.shellFrictionFactor = Math.exp(0.576 - 0.19*Math.log($scope.shellReynolds));
      $scope.tubeFrictionFactor = Math.pow((1.58 * Math.log($scope.tubeReynolds) - 3.28), -2);

      if($scope.hot.side === "Shell Side"){
        $scope.shellPressureDrop = ($scope.shellFrictionFactor * Math.pow($scope.design.massVelocity, 2) * ($scope.design.tubeLength.value / $scope.design.baffleSpacing.value) * $scope.design.shellDiameter.value) / (2 * 9.8 * $scope.hot.density.value * $scope.design.equivalentDiameter);
        $scope.tubePressureDrop = ($scope.tubeFrictionFactor * Math.pow($scope.design.massVelocityOfTube, 2) * $scope.design.tubeLength.value * $scope.design.noOfPasses) / (2 * 9.8 * $scope.cold.density.value * $scope.design.innerDia.value);
        $scope.tubeReturnLoss = (4 * $scope.design.noOfPasses * Math.pow($scope.design.linearVelocityOfTube, 2) * $scope.cold.density.value) / (2 * 9.8);
        $scope.tubeTotalDrop = $scope.tubePressureDrop + $scope.tubeReturnLoss;
      }

      if($scope.hot.side === "Tube Side"){
        $scope.shellPressureDrop = ($scope.shellFrictionFactor * Math.pow($scope.design.massVelocity, 2) * ($scope.design.tubeLength.value / $scope.design.baffleSpacing.value) * $scope.design.shellDiameter.value) / (2 * 9.8 * $scope.cold.density.value * $scope.design.equivalentDiameter);
        $scope.tubePressureDrop = ($scope.tubeFrictionFactor * Math.pow($scope.design.massVelocityOfTube, 2) * $scope.design.tubeLength.value * $scope.design.noOfPasses) / (2 * 9.8 * $scope.hot.density.value * $scope.design.innerDia.value);
        $scope.tubeReturnLoss = (4 * $scope.design.noOfPasses * Math.pow($scope.design.linearVelocityOfTube, 2) * $scope.hot.density.value) / (2 * 9.8);
        $scope.tubeTotalDrop = $scope.tubePressureDrop + $scope.tubeReturnLoss;
      }1
    })
    

    $scope.getUValue = function () {
      $scope.selectedUValue = $filter('filter')($scope.typicalUValues, { hf: $scope.hot.material, cf: $scope.hot.material}, true);
      if ($scope.selectedUValue.length !=1){
        alert("Invalid selection");
        $scope.selectedUValue = null;
      } 
      else $scope.selectedUValue = $scope.selectedUValue[0];
    }

    $scope.switchSides = function () {
      var temp = $scope.cold.side;
      $scope.cold.side = $scope.hot.side;
      $scope.hot.side = temp;
    }
  });
