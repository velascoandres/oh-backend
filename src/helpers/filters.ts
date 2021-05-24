export const buildOperatorCondition = (field: string, value: number | string, operator: string) => {
  return {
    [field]: {
      [operator]: value,
    },
  };
};

export const buildSimpleCondition = (field: string, value: number | string) => {
  return {
    [field]: value,
  };
};

export const buildRangeCondition = (field: string, minValue = 0, maxValue = 0) => {

  const conditions = [];
  if (maxValue) {
    conditions.push(
      buildOperatorCondition(field, maxValue, '$lte'),
    );
  }
  if (minValue) {
    conditions.push(
      buildOperatorCondition(field, minValue, '$gte'),
    );
  }
  return conditions;
};
