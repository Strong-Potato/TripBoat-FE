const validationForm = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,

  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,

  emailSertCode: /^[\S]{8}$/,

  nickname: /^[가-힣a-zA-Z0-9\s]{1,10}$/,
};

export default validationForm;
