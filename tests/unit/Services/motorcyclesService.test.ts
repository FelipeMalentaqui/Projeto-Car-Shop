import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testando a camada de service motorcycles', function () {
  describe('function createMotorcycles', function () {
    it('Devera criar uma nova motorcycles com sucesso', async function () {
      // Arrange
      const mockIMotorcycles: IMotorcycle = {
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };

      const motorcycleNew = new Motorcycle({ ...mockIMotorcycles, id: '63319d80feb9f483ee823ac5' });
      sinon.stub(Model, 'create').resolves(motorcycleNew);
      // Act
      const service = new MotorcyclesService();
      const result = await service.createMotorcycles(mockIMotorcycles);

      expect(result).to.deep.equal(motorcycleNew);
      
      // Assert
    });
    afterEach(function () {
      sinon.restore();
    }); 
  });

  describe('getAll', function () {
    it('Deveria retornar todas as motorcycles!', async function () {
      const mockAllMotorcycles = [
        {
          id: '6348513f34c397abcad040b2',
          model: 'Honda Cb 600f Hornet',
          year: 2005,
          color: 'Yellow',
          status: true,
          buyValue: 30.000,
          category: 'Street',
          engineCapacity: 600,
        },
      ];

      sinon.stub(Model, 'find').resolves(mockAllMotorcycles);
      const service = new MotorcyclesService();
      const result = await service.getAll();

      expect(result).to.deep.equal(mockAllMotorcycles);
    });

    afterEach(function () {
      sinon.restore();
    }); 
  });
});