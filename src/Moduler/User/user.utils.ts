import {
  adminModel,
  customerModel,
  driverModel,
  operatorModel,
} from '../Member/member.model';

type Tidentity = 'customer' | 'operator' | 'driver' | 'admin';

const generateId = async (identity: Tidentity) => {
  let realId: string = '';
  if (identity === 'customer') {
    const count = await customerModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `B-${currentId}`;
  } else if (identity === 'operator') {
    const count = await operatorModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `S-${currentId}`;
  } else if (identity === 'driver') {
    const count = await driverModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `D-${currentId}`;
  } else if (identity === 'admin') {
    const count = await adminModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `A-${currentId}`;
  }
  return realId;
};

export default generateId;
