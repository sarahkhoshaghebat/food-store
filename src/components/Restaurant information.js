export const RestaurantInformation = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5" dir="rtl">
          <div className="col-md-8 text-danger">
            <h3>سرویس دهی آنلاین</h3>
            <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">صبحانه</th>
                  <th scope="col">ناهار</th>
                  <th scope="col">شام</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">شنبه</th>
                  <td>-</td>
                  <td>11:00 تا 17:00</td>
                  <td>17:00 تا 00:30</td>
                </tr>
                <tr>
                  <th scope="row">یک‌شنبه</th>
                  <td>-</td>
                  <td>11:00 تا 17:00</td>
                  <td>17:00 تا 00:30</td>
                </tr>
                <tr>
                  <th scope="row">دوشنبه</th>
                  <td>-</td>
                  <td>11:00 تا 17:00</td>
                  <td>17:00 تا 00:30</td>
                </tr>
                <tr>
                  <th scope="row">سه‌شنبه</th>
                  <td>-</td>
                  <td>11:00 تا 17:00</td>
                  <td>17:00 تا 00:30</td>
                </tr>
                <tr>
                  <th scope="row">چهارشنبه</th>
                  <td>-</td>
                  <td>11:00 تا 17:00</td>
                  <td>17:00 تا 00:30</td>
                </tr>
                <tr>
                  <th scope="row">پنج‌شنبه</th>
                  <td>-</td>
                  <td>11:00 تا 17:00</td>
                  <td>17:00 تا 00:30</td>
                </tr>
                <tr>
                  <th scope="row">جمعه</th>
                  <td>-</td>
                  <td>11:00 تا 17:00</td>
                  <td>17:00 تا 00:30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <h3 className="text-danger">نوع غذا</h3>
            <h5 className="mt-5">فست فود</h5>
          </div>
        </div>
        <div className="row mt-5 pt-5" dir="rtl">
          <div className="row">
            <h3>آدرس رستوران</h3>
            <h4 className="mt-4">
              تهران، پونک، بلوار میرزابابایی، نرسیده به سردار جنگل، نبش گلها، پلاک 134
            </h4>
            <h4 className="mt-4">تلفن: 46132246 - 46139789 - 46139861</h4>
          </div>
          <div className="row mt-5 pb-5 mb-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.918356425462!2d51.32740088495646!3d35.75885587228177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd73d9814557%3A0xcb34dbc3b7f69e02!2sShila%20Fast%20Food!5e0!3m2!1sen!2sse!4v1725558647203!5m2!1sen!2sse"
              width="100%"
              height="400"
              title="map"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
        </div>
      </div>
    </>
  );
};


