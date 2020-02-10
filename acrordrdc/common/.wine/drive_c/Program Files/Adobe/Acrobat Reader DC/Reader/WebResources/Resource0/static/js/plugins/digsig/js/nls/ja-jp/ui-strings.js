/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

define({IDENTITY_LIST_HEADER_TEXT:"デジタル ID で署名",IDENTITY_LIST_DESCRIPTION:"署名に使用するデジタル ID を選択してください :",REFRESH_BUTTON_TEXT:"更新",CANCEL_BUTTON_TEXT:"キャンセル",BACK_BUTTON_TEXT:"戻る",CONTINUE_BUTTON_TEXT:"続行",SAVE_BUTTON_TEXT:"保存",CREATE_NEW_BUTTON_TEXT:"新しいデジタル ID を作成",CONFIGURE_NEW_BUTTON_TEXT:"新しいデジタル ID を設定",MANAGE_DIGITAL_ID_BUTTON_TEXT:"デジタル ID を管理",HELP_BUTTON_TEXT:"ヘルプ",VIEW_DETAILS_LINK_TEXT:"詳細を表示",NO_IDENTITY_LABEL:"ID が見つかりません。新しい ID を作成してください。",CONFIGURE_DIALOG_HEADER:"署名に使用するデジタル ID の設定",CONFIGURE_DIALOG_LEFT_SIDE_DESCIPTION:"デジタル ID は、デジタル署名を作成するのに必要です。最も安全なデジタル ID は、信頼済みの認証機関により発行され、スマートカードやトークンのようなセキュアデバイスに基づいています。ファイルに基づいている場合もあります。",CONFIGURE_DIALOG_LEFT_SIDE_SUB_DESCIPTION:"新しいデジタル ID を作成することもできますが、高いレベルの ID 保証を提供することはできません。",CONFIGURE_DIALOG_OPTIONS_INTRO:"デジタル ID の種類を選択 :",CONFIG_OPTION_1_HEADING:"署名作成デバイス",CONFIG_OPTION_1_SUB_HEADING:"コンピューターに接続されているスマートカードまたはトークンを設定します",CONFIG_OPTION_2_HEADING:"ファイルのデジタル ID を使用",CONFIG_OPTION_2_SUB_HEADING:"既存のデジタル ID をファイルとして取り込みます",CONFIG_OPTION_3_HEADING:"新しいデジタル ID の作成",CONFIG_OPTION_3_SUB_HEADING:"Self-Sign デジタル ID を作成します",SIGNATURE_CREATION_DEVICE_DIALOG_HEADER:"署名作成デバイスの使用",SIGNATURE_CREATION_DEVICE_DIALOG_LEFT_SIDE_DESCIPTION:"ハードウェアの署名作成デバイス (スマートカードや USB トークンなど) から取得するデジタル ID は、デバイスが正しく接続されていれば、自動的に使用可能になります。",SIGNATURE_CREATION_DEVICE_DIALOG_LEFT_SIDE_SUB_DESCIPTION:"この手順に従うか、追加の設定が必要な場合はデバイスの製造元にお問い合わせください。",SIGNATURE_CREATION_OPTION_1_HEADING:"パートナーから署名デバイスを注文",SIGNATURE_CREATION_OPTION_1_SUB_HEADING:"署名デバイスをお持ちでない場合は、Adobe パートナーから入手できます。",SIGNATURE_CREATION_OPTION_2_HEADING:"ドライバーのダウンロードとインストール",SIGNATURE_CREATION_OPTION_2_SUB_HEADING:"必要なすべてのドライバーをダウンロードしてインストールしていることを確認してください。詳しくは、デバイス製造元の Web サイトをご覧ください。",SIGNATURE_CREATION_OPTION_3_HEADING:"署名デバイスの接続",SIGNATURE_CREATION_OPTION_3_SUB_HEADING:"署名デバイスがコンピューターに正しく接続されていることを確認してください。スマートカードにはリーダーが必要な場合があります。",CONNECTED_HARDWARE_HEADING:"接続されているハードウェア",CONNECTED_HARDWARE_SUB_HEADING:"デバイスが USB ポートでコンピューターに接続されていることを確認し、",CONNECTED_DEVICE_DRIVER_HEADING:"ドライバーのダウンロードとインストール",CONNECTED_DEVICE_DRIVER_SUB_HEADING:"必要なドライバーをすべてダウンロードし、インストールしていることを確認してください。詳しくは、デバイス製造元の Web サイトをご覧ください。",CONNECTED_DEVICE_ORDER_HEADING:"パートナーからデバイスを注文",CONNECTED_DEVICE_ORDER_SUBHEADING:"接続されているデバイスがない場合は、アドビパートナーから入手できます。",FIND_DIGITAL_ID_HEADER:"デジタル ID ファイルの検索",FIND_DIGITAL_ID_BROWSE_HEADING:"デジタル ID ファイルを参照します。デジタル ID ファイルは、パスワードで保護されています。デジタル ID にアクセスするには、パスワードを知っている必要があります。",FIND_DIGITAL_ID_PASSWORD_HEADING:"デジタル ID のパスワードを入力",BROWSE_BUTTON:"参照",FIND_DIGITAL_ID_LEFT_PANE_DESCIPTION:"デジタル ID ファイルには通常 PFX または P12 拡張子が付いており、公開鍵のファイル (証明書) および関連する秘密鍵のファイルが含まれています。",FIND_DIGITAL_ID_LEFT_PANE_SUB_DESCIPTION:"デジタル ID ファイルを使用して署名するには、プロンプトに従ってファイルを参照および選択し、秘密鍵を保護しているパスワードを入力します。",CREATE_LOCAL_CERTIFICATE_HEADER:"Self-Sign デジタル ID の作成",ADD_DIGITAL_ID_FILE_HEADER:"ファイルからデジタル ID を追加",ADD_DIGITAL_ID_SIGNATURE_DEVICE_HEADER:"署名作成デバイスからデジタル ID を追加",ADD_DIGITAL_ID_DESC:"デジタル署名に使用できるデジタル ID の一覧に、次のデジタル ID が追加されます :",SAVE_DIGITAL_ID_HEADER:"Self-Sign デジタル ID をファイルに保存",SAVE_DIGITAL_ID_BROWSE_HEADING:"デジタル ID は次の場所に保存されます :",SAVE_DIGITAL_ID_PASSWORD:"次のパスワードでデジタル ID を保護する :",SAVE_DIGITAL_ID_CONFIRM_PASSWORD:"パスワードを再度入力 :",CREATE_OPTIONS_HEADER:"新しいデジタル ID の保存先を選択",CREATE_OPTIONS_LEFT_PANE_DESCRIPTION:"デジタル ID は通常、ID の有効性を保証する信頼済みのプロバイダーにより発行されます。<br>Self-Sign デジタル ID は、同じレベルの保証を提供することはできないので、使用事例によっては承認されない場合があります。",CREATE_OPTIONS_LEFT_PANE_SUB_DESCRIPTION:"この形式の認証が許容されるかどうか、受信者に確認してください。",CREATE_FORM_LEFT_PANE_DESCRIPTION:"Self-Sign デジタル ID の作成に使用する ID 情報を入力します。",CREATE_FORM_LEFT_PANE_SUB_DESCRIPTION:"個人によって自己署名されたデジタル ID は、ID 情報が有効であるという保証にはなりません。そのため、特定のユースケースでは承認されない場合があります。",SAVE_DIALOG_LEFT_PANE_DESCRIPTION:"デジタル ID の秘密鍵を保護するパスワードを追加します。デジタル ID を使って署名する際に、このパスワードが再び必要になります。",SAVE_DIALOG_LEFT_PANE_SUB_DESCRIPTION:"デジタル ID ファイルを既知の場所に保存して、コピーまたはバックアップできるようにします。",SAVE_TO_APPLE_KEYCHAIN_HEADER:"Apple キーチェーンに保存",SAVE_TO_APPLE_KEYCHAIN_DESC:"デジタル ID を Apple キーチェーンに保存して、他のアプリケーションと共有します。",SAVE_TO_FILE_HEADER:"ファイルに保存",SAVE_TO_FILE_DESC:"デジタル ID をコンピューター上のファイルに保存します。",SAVE_TO_WIN_HEADER:"Windows 証明書ストアに保存",SAVE_TO_WIN_DESC:"デジタル ID を Windows 証明書ストアに保存して、他のアプリケーションと共有します。",EXPIRE_TEXT:"期限",FILE_PASSWORD_ERROR:"パスワードが正しくありません。入力し直してください。",SAVE_FILE_PASSWORD_MISMATCH:"パスワードが一致しません",ISSUED_BY_TEXT:"発行者 :",LEARN_MORE_TEXT:"さらに詳しく",NAME_LABEL_TEXT:"名前",ORG_UNIT_LABEL_TEXT:"部署",ORG_NAME_LABEL_TEXT:"会社名",EMAIL_ADDRESS_LABEL_TEXT:"電子メールアドレス",COUNTRY_LABEL_TEXT:"国 / 地域",KEY_ALGO_LABEL_TEXT:"鍵アルゴリズム",KEY_USAGE_LABEL_TEXT:"デジタル ID の使用対象",NAME_PLACEHOLDER_TEXT:"名前を入力...",ORG_UNIT_PLACEHOLDER_TEXT:"部署を入力...",ORG_NAME_PLACEHOLDER_TEXT:"会社名を入力...",EMAIL_ADDRESS_PLACEHOLDER_TEXT:"電子メールを入力...",SIGN_AS_TEXT:"次の名前で署名 : ",APPEARANCE_LABEL_TEXT:"表示方法",EDIT_BUTTON_TEXT:"編集",CREATE_BUTTON_TEXT:"作成",VIEW_CERTIFICATE_DETAILS_LABEL_TEXT:"証明書の詳細を表示",LOCK_DOCUMENT_AFTER_SIGNING_LABEL_TEXT:"署名後に文書をロックする",REASON_LABEL_TEXT:"理由",LOCATION_LABEL_TEXT:"場所",CONTACT_INFO_LABEL_TEXT:"連絡先情報",PERMITTED_ACTION_AFTER_SIGNING_LABEL_TEXT:"証明後に許可する操作",REVIEW_DOCUMENT_CONTENT_LABEL_TEXT:"署名に影響を与える可能性のある文書コンテンツをレビューする",DOCUMENT_HAS_BEEN_REVIEWED_LABEL_TEXT:"文書の警告が確認されました",REVIEW_BUTTON_TEXT:"レビュー",SIGNING_DIALOG_PASSWORD_PLACEHOLDER_TEXT:"デジタル ID の PIN またはパスワードを入力...",SIGN_BUTTON_TEXT:"署名",CUTOMIZE_DIALOG_TITLE_TEXT:"署名の表示方法をカスタマイズ",TEXT_BUTTON_TEXT:"テキスト",IMAGE_BUTTON_TEXT:"画像",DRAW_BUTTON_TEXT:"手書き",NONE_BUTTON_TEXT:"なし",INCLUDE_TEXT_LABEL_TEXT:"含めるテキスト",NAME_CHECKBOX_LABEL_TEXT:"名前",DATE_CHECKBOX_LABEL_TEXT:"日付",LOCATION_CHECKBOX_LABEL_TEXT:"場所",REASON_CHECKBOX_LABEL_TEXT:"理由",DN_CHECKBOX_LABEL_TEXT:"識別名",VERSION_CHECKBOX_LABEL_TEXT:"Adobe Acrobat バージョン",LOGO_CHECKBOX_LABEL_TEXT:"ロゴ",LABEL_CHECKBOX_LABEL_TEXT:"ラベル",DIGITS_FORMAT_LABEL_TEXT:"数字の形式",DIGITS_LABEL_TEXT:"数字",TEXT_DIRECTION_LABEL_TEXT:"テキストの方向",AUTO_LABEL_TEXT:"自動",CLEAR_LABEL_TEXT:"クリア",PRESET_NAME_TEXT:"プリセット名",OK_BUTTON_TEXT:"OK",CLICK_TO_DRAW_TEXT:"手書きで入力するには、ここをクリック",APPLY_BUTTON_TEXT:"適用",INVALID_EMAIL_ADDRESS:"電子メールアドレスが無効です",PASSWORD_LENGTH_ERROR:"パスワードが正しくありません。6 文字以上のパスワードを設定してください"});