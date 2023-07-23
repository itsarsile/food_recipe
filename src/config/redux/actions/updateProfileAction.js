import axios from 'axios';

const updateProfileAction = (data, id, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('photo', photo);
    const profile = await axios.put(`https://tense-tan-lion.cyclic.app/user/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(profile);
    alert('Update Profile Successful');
    setShow(false);
    const result = profile.data.data;
    dispatch({type: 'UPDATE_PROFILE', payload: result});
    setTimeout(function () {
      window.location.reload(1);
    }, 1500);
  } catch (err) {
    console.error(err.message);
    alert('Update Profile Failed');
    setShow(false);
  }
};

export default updateProfileAction;
