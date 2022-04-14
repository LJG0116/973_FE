import { useState, useEffect } from 'react';
import { validationEmail } from '@utils/validation';

const useForm = ({ initialValues, onSubmit, onClick, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => () => {
      setErrors({});
      setIsLoading(false);
    },
    []
  );

  // signup 중복확인 click event hook
  const handleClick = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const newErrors = {};
    const { email } = values;
    if (!email) newErrors.email = '이메일을 입력해주세요.';
    else if (!validationEmail(email))
      newErrors.email = '잘못된 이메일 형식입니다.';

    if (!newErrors || Object.keys(newErrors).length === 0) {
      await onClick(values);
      setErrors({ newErrors });
    } else setErrors(newErrors);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    if (!newErrors || Object.keys(newErrors).length === 0) {
      await onSubmit(values);
      setErrors({ newErrors });
    } else setErrors(newErrors);
    setIsLoading(false);
  };

  const handleImageUpload = (e) => {
    const { name, files } = e.target;
    const imageFile = files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      setValues({
        ...values,
        [`${name}Url`]: fileReader.result,
        [`${name}File`]: imageFile,
      });
    };
  };

  return {
    values,
    errors,
    isLoading,
    setValues,
    handleChange,
    handleClick,
    handleSubmit,
    handleImageUpload,
  };
};
export default useForm;
