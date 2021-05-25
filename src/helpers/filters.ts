export const buildOperatorCondition = (field: string, value: number | string, operator: string) => {
  return {
    [field]: {
      [operator]: value,
    },
  };
};

export const buildSimpleCondition = (field: string, value: number | string, acceptEmpty = false) => {
  const conditions = [];
  if (value || acceptEmpty) {
    conditions.push(
      {
        [field]: value,
      },
    );
  }
  return conditions;
};

export const buildLikeCondition = (field: string, regexExp: string, acceptEmpty = false) => {
  const conditions = [];
  if (regexExp || acceptEmpty) {
    conditions.push(
      {
        [field]: {
          $regex: regexExp,
          $options: 'i',
        },
      },
    );
  }
  return conditions;
};

export const buildRangeCondition = (field: string, minValue = 0, maxValue = 0, acceptEmpty = false) => {

  const conditions = [];
  if (maxValue || acceptEmpty) {
    conditions.push(
      buildOperatorCondition(field, maxValue, '$lte'),
    );
  }
  if (minValue || acceptEmpty) {
    conditions.push(
      buildOperatorCondition(field, minValue, '$gte'),
    );
  }
  return conditions;
};
