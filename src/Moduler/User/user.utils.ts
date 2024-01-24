import {
  adminModel,
  customerModel,
  driverModel,
  moderatorModel,
  operatorModel,
} from '../Member/member.model';

type Tidentity = 'customer' | 'operator' | 'driver' | 'admin' | 'moderator';

const generateId = async (identity: Tidentity) => {
  let realId: string = '';
  if (identity === 'customer') {
    const count = await customerModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `C-${currentId}`;
  } else if (identity === 'operator') {
    const count = await operatorModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `O-${currentId}`;
  } else if (identity === 'driver') {
    const count = await driverModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `D-${currentId}`;
  } else if (identity === 'admin') {
    const count = await adminModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `A-${currentId}`;
  }
  else if (identity === 'moderator') {
    const count = await moderatorModel.find({});
    const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
    realId = `M-${currentId}`;
  }
  return realId;
};

export default generateId;