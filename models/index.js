const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
}, {
  getterMethods: {
    route() {
      return '/wiki/' + this.urlTitle;
    }
  }
}, {
  hooks: {
    beforeValidate: (page) => {
      if (page.title) {
        page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
      } else {
        page.urlTitle = Math.random().toString(36).substring(2, 7);
      }
    }
  }
}
  // setterMethods: {
  //   setUrlTitle (pageTitle) {
  //     pageTitle.replace(/[^\w\s]/g, '');
  //     pageTitle.replace(/[\s]/g, '_');
  //     this.setDataValue('urlTitle', pageTitle);
  //   }
  // }
);

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    unique: true,
    allowNull: false
  }
});

module.exports = {
  db: db,
  Page: Page,
  User: User
};
