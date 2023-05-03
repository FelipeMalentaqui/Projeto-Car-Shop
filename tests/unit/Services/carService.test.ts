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
  });
});