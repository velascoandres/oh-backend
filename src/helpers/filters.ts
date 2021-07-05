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

export const buildSimpleMatchCondition = (field: string, value: number | string, acceptEmpty = false) => {
  if (!value) {
    return [];
  }
  return [{
    $match: {
      [field]: value,
    },
  }];
};


export const buildSimpleStatusCondition = (field: string, status: 1 | 0 | '0' | '1') => {
  const conditions = [];
  conditions.push(
    {
      [field]: Number(status),
    },
  );
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


export const setupResponseWithPagination = (skip: number, take: number) => {
  return {
    $facet: {
      data: [
        { $skip: skip },
        { $limit: take },
      ],
      pageInfo: [
        { $group: { _id: null, count: { $sum: 1 } } },
      ],
    },
  };
};


export const setupLookup = (from: string, foreignField: string, as: string, localField = '_id') => {
  return {
    $lookup: {
      from,
      localField,
      foreignField,
      as,
    },
  };
};


export const setupGeoNearPoint = (location: number[], distance: number, distanceField: string, spherical = false) => {
  return {
    $geoNear: {
      near: { type: 'Point', coordinates: location },
      maxDistance: distance,
      spherical,
      distanceField,
    },
  };
};

