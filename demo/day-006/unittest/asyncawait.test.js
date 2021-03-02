const fetchData = async (cb) => {
  const a = await Promise.resolve("peanut butter");
  if (typeof cb === "function") cb(a);
  else return a;
};

test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
