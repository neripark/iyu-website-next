/** サイト共通のメタタグ。 */
export const Meta: React.FC = () => {
  return (
    <>
        {/* note: https://nextjs.org/docs/messages/no-page-custom-font の対策のためここに書いている */}
        <link
          href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Heebo:700&display=swap"
          rel="stylesheet"
        />
    </>
  );
};
