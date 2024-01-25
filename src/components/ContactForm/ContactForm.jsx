export const ContactForm = () => {
  return (
    <form action="submit">
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Number
        <input type="tel" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
