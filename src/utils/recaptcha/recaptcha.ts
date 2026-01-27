export const validateRecaptchaToken = async (token: string): Promise<boolean> => {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY is not defined");
      return false;
    }
  
    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        {
          method: "POST",
        }
      );
  
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error("Error validating recaptcha token", error);
      return false;
    }
  };
