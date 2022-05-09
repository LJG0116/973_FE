import { useState, useEffect } from 'react';
import { getCheckEmail, getCheckNickname } from '@apis/auth';
import { validationEmail } from '@utils/validation';

const useForm = ({ initialValues, onSubmit, validate }) => {
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

  // signup 이메일 중복확인 click event hook
  const handleEmailClick = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const newErrors = {};
    const { email } = values;
    if (!email) newErrors.email = '이메일을 입력해주세요.';
    else if (!validationEmail(email))
      newErrors.email = '잘못된 이메일 형식입니다.';

    if (!newErrors || Object.keys(newErrors).length === 0) {
      const response = await getCheckEmail({ userId: email });
      setErrors({ newErrors });
      console.log(response);

      setValues({
        ...values,
        isCheckedEmail: true,
      });
    } else setErrors(newErrors);
    setIsLoading(false);
  };

  // signup 닉네임 중복확인 click event hook
  const handleNicknameClick = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const newErrors = {};
    const { nickname } = values;
    if (!nickname) newErrors.nickname = '닉네임을 입력해주세요.';

    if (!newErrors || Object.keys(newErrors).length === 0) {
      const response = await getCheckNickname({ nickname });
      setErrors({ newErrors });
      console.log(response);

      setValues({
        ...values,
        isCheckedNickname: true,
      });
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

  const handleLocationClick = (e) => {
    const name = e.currentTarget.getAttribute('name');
    const value = e.currentTarget.getAttribute('value');
    setValues({ ...values, [name]: [...values[name], value] });
  };

  useEffect(() => {}, [values]);

  return {
    values,
    errors,
    isLoading,
    setValues,
    handleChange,
    handleEmailClick,
    handleNicknameClick,
    handleSubmit,
    handleImageUpload,
    handleLocationClick,
  };
};
export default useForm;
