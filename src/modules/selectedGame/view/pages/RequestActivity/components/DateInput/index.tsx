import React, { useCallback, useState } from 'react';


import DatePicker from '@react-native-community/datetimepicker';
import { Container, ErrorField, ErrorFieldText, Picker, Text } from './styles';


import { formatDate } from 'modules/selectedGame/view/helpers';


import { useField } from 'formik';

const DateInput: React.FC = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [{ value }, { error, touched }, { setValue }] = useField('date');

  const handleChange = useCallback(
    (_: unknown, date?: Date) => {
      setShowDatePicker(false);
      setValue(date?.toDateString());
    },
    [setValue],
  );

  return (
    <Container>
      <Picker
        onTouchEnd={() => {
          setShowDatePicker(true);
        }}
      >
        <Text date={Boolean(value)}>
          {value ? formatDate(value) : 'Data da conclusão'}
        </Text>
      </Picker>

      {error && touched && (
        <ErrorField>
          <ErrorFieldText>{error}</ErrorFieldText>
        </ErrorField>
      )}

      {showDatePicker && (
        <DatePicker
          value={value ? ((Date.parse(value) as unknown) as Date) : new Date()}
          onChange={handleChange}
          maximumDate={new Date()}
        />
      )}
    </Container>
  );
};

export default DateInput;
