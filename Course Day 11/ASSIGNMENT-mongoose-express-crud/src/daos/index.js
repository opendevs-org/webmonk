module.exports = {

    find: async (modal, query) => await modal.find(query),

    //NOTE: implement findOne

    save: async (modal, data) => {
        const newData = new modal(data);
        return await newData.save();
    },

    findOneAndUpdate: async (modal, filter, data) => await modal.findOneAndUpdate(filter, data),

    //NOTE: implement findByIdAndDelete

};
