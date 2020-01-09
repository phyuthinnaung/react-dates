import moment from 'moment';

import _ from 'lodash';
import toMomentObject from './toMomentObject';

export default function toISODateString(date, currentFormat) {
  const dateObj = moment.isMoment(date) ? date : toMomentObject(date, currentFormat);
  if (!dateObj) return null;

  // Template strings compiled in strict mode uses concat, which is slow. Since
  // this code is in a hot path and we want it to be as fast as possible, we
  // want to use old-fashioned +.
  // eslint-disable-next-line prefer-template
  // eslint-disable-next-line max-len
  // return dateObj.year() + '-' + String(dateObj.month() + 1).padStart(2, '0') + '-' + String(dateObj.date()).padStart(2, '0');
  return `${dateObj.year()}-${_.padStart(String(dateObj.month() + 1), 2, '0')}-${_.padStart(String(dateObj.date()), 2, '0')}`;
}
