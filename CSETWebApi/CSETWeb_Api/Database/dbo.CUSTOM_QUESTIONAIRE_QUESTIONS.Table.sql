USE [CSETWeb]
GO
/****** Object:  Table [dbo].[CUSTOM_QUESTIONAIRE_QUESTIONS]    Script Date: 11/14/2018 3:57:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CUSTOM_QUESTIONAIRE_QUESTIONS](
	[Custom_Questionaire_Name] [varchar](50) NOT NULL,
	[Question_Id] [int] NOT NULL,
 CONSTRAINT [PK_CUSTOM_QUESTIONAIRE_QUESTIONS] PRIMARY KEY CLUSTERED 
(
	[Custom_Questionaire_Name] ASC,
	[Question_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CUSTOM_QUESTIONAIRE_QUESTIONS]  WITH CHECK ADD  CONSTRAINT [FK_CUSTON_QUESTIONAIRE_QUESTIONS_CUSTOM_QUESTIONAIRES] FOREIGN KEY([Custom_Questionaire_Name])
REFERENCES [dbo].[CUSTOM_QUESTIONAIRES] ([Custom_Questionaire_Name])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[CUSTOM_QUESTIONAIRE_QUESTIONS] CHECK CONSTRAINT [FK_CUSTON_QUESTIONAIRE_QUESTIONS_CUSTOM_QUESTIONAIRES]
GO
