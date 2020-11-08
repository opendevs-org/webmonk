module.exports = {

    find: async (modal, query) => await modal.find(query),

    findOne: async (modal, query) => await modal.findOne(query),

    save: async (modal, data) => {
        const newData = new modal(data);
        return await newData.save();
    },

    findOneAndUpdate: async (modal, filter, data) => await modal.findOneAndUpdate(filter, data),

    findByIdAndDelete: async (modal, _id) => await modal.findByIdAndDelete(_id)

};
