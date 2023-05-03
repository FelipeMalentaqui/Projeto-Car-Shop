import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Testando a camada de service Car', function () {
  describe('function createCar', function () {
    it('Devera criar um novo carro com sucesso', async function () {
      // Arrange
      const mockICar: ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      };
      const mockNewCar = new Car({ ...mockICar, id: '63319d80feb9f483ee823ac5' });
      sinon.stub(Model, 'create').resolves(mockNewCar);
      // Act
      const service = new CarService();
      const result = await service.createCar(mockICar);

      expect(result).to.deep.equal(mockNewCar);
      
      // Assert
    });
    afterEach(function () {
      sinon.restore();
    }); 
  });

  describe('getAllCars', function () {
    it('Deveria retornar todos os carros', async function () {
      const mockAllCars = [
        {
          id: '634852326b35b59438fbea2f',
          model: 'Marea',
          year: 2002,
          color: 'Black',
          status: true,
          buyValue: 15.99,
          doorsQty: 4,
          seatsQty: 5,
        },
        // {
        //   id: '634852326b35b59438fbea31',
        //   model: 'Tempra',
        //   year: 1995,
        //   color: 'Black',
        //   buyValue: 39,
        //   doorsQty: 2,
        //   seatsQty: 5,
        // },
      ];

      sinon.stub(Model, 'find').resolves(mockAllCars);
      const service = new CarService();
      const result = await service.getAllCars();

      expect(result).to.deep.equal(mockAllCars);
    });

    afterEach(function () {
      sinon.restore();
    }); 
  });

  // describe('getById', function () {
  //   it('Deveria retornar um erro quando o id é invalido', async function () {
  //     // const mockIdError = {
  //     // id: '634852326b35b59438fbea2f',
  //     // model: 'Marea',
  //     // year: 2002,
  //     // color: 'Black',
  //     // status: true,
  //     // buyValue: 15.99,
  //     // doorsQty: 4,
  //     // seatsQty: 5,
  //     // };

  //     // sinon.stub(Model, 'findOne').resolves(mockIdError);

  //     const service = new CarService();
  //     const result = await service.getById('123456aa');

  //     expect(result).to.deep.equal('Car not found');

  //     afterEach(function () {
  //       sinon.restore();
  //     }); 
  //   });

  //   it('Deveria retornar um erro quando o id não existe no banco', async function () {
  //     const mockIdError = {
  //       id: '634852326b35b59438fbea2f',
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       status: true,
  //       buyValue: 15.99,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     };

  //     sinon.stub(Model, 'findOne').resolves(mockIdError);

  //     const service = new CarService();
  //     const result = await service.getById('123456aa');

  //     expect(result).to.deep.equal('Car not found');
  //   });

  //   it('Deveria retornar um carro com sucesso quando existir o id', async function () {
  //     const mockId = {
  //       id: '634852326b35b59438fbea2f',
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       status: true,
  //       buyValue: 15.99,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     };

  //     sinon.stub(Model, 'findOne').resolves(mockId);

  //     const service = new CarService();
  //     const result = await service.getById('634852326b35b59438fbea2f');

  //     expect(result).to.deep.equal(mockId);
  //   });
  // });
});