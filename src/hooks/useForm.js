import { useState, useEffect } from 'react';
import { getCheckEmail, getCheckNickname } from '@apis/auth';

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

  // signup 이메일 중복확인 click event hook
  const handleEmailClick = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    const { email } = values;
    const newErrors = {};

    if (!email) {
      newErrors.email = '이메일을 입력해주세요.';
    }

    if (!newErrors || Object.keys(newErrors).length === 0) {
      const response = await getCheckEmail({ email });
      if (response) {
        setValues({
          ...values,
          emailCheck: true,
        });
        setErrors({ ...errors, ...newErrors });
        alert('이메일 확인이 완료되었습니다.');
      }
    } else setErrors(newErrors);

    setIsLoading(false);
  };

  // signup 닉네임 중복확인 click event hook
  const handleNicknameClick = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    const { nickname } = values;
    const newErrors = {};

    if (!nickname) {
      newErrors.nickname = '닉네임을 입력해주세요.';
    }

    if (!newErrors || Object.keys(newErrors).length === 0) {
      const response = await getCheckNickname({ nickname });
      if (response) {
        setValues({
          ...values,
          nicknameCheck: true,
        });
        alert('닉네임 확인이 완료되었습니다.');
        setErrors({ ...errors, ...newErrors });
      }
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

  // 위치 모달에서 "확인" 눌렀을 때 호출
  const handleListClick = ({ name, value }) => {
    setValues({ ...values, [name]: value });
  };

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
    handleListClick,
  };
};
export default useForm;
